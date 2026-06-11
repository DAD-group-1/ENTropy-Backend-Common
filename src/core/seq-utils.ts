import Transport from 'winston-transport';
import * as https from 'https';
import * as http from 'http';

export interface SeqTransportOptions extends Transport.TransportStreamOptions {
  host: string;
  port: number;
  apiKey?: string;
  ssl?: boolean;
}

export class SeqClefTransport extends Transport {
  private readonly options: SeqTransportOptions;

  constructor(opts: SeqTransportOptions) {
    super(opts);
    this.options = opts;
  }

  log(info: any, callback: () => void) {
    const clefEntry =
      JSON.stringify({
        '@t': new Date().toISOString(),
        '@mt': info.message,
        '@l': info.level,
        ...info, // spread remaining fields as properties
        level: undefined, // remove winston-specific fields
        message: undefined,
      }) + '\n';

    const { host, port, apiKey, ssl } = this.options;
    const lib = ssl ? https : http;

    const req = lib.request(
      {
        hostname: host,
        port,
        path: '/api/events/raw?clef',
        method: 'POST',
        headers: {
          'Content-Type': 'application/vnd.serilog.clef',
          'Content-Length': Buffer.byteLength(clefEntry),
          ...(apiKey ? { 'X-Seq-ApiKey': apiKey } : {}),
        },
      },
      (res) => {
        res.resume(); // drain response
        if (res.statusCode && res.statusCode >= 400) {
          this.emit('warn', new Error(`Seq responded with ${res.statusCode}`));
        }
      },
    );

    req.on('error', (e) => this.emit('error', e));
    req.write(clefEntry);
    req.end();

    callback();
  }
}
