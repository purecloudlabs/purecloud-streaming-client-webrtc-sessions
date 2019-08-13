// ------------------------------------------------
// TODO: Type out jingle-session in 'jingle-media-session-purecloud'
// TODO: Type out rtcpeerconnection in 'jingle-media-session-purecloud'
// TODO: Type out peerID in 'jingle-media-session-purecloud'
// TODO: Type out 'jingle-stanza/stanzas/jingleMessage' better...
// TODO: Type out 'jingle' SJJ
// ------------------------------------------------

/// <reference path="modules/wildemitter.d.ts" />
/// <reference path="modules/rtcpeerconnection.d.ts" />
/// <reference path="modules/jingle.d.ts" />
/// <reference path="modules/jingle-session.d.ts" />
/// <reference path="modules/jingle-purecloud.d.ts" />
/// <reference path="modules/jingle-media-session-purecloud.d.ts" />
/// <reference path="modules/jingle-media-data-session-purecloud.d.ts" />
/// <reference path="modules/stanza.d.ts" />


/* TODO: remove this once streaming-client is typed */
interface TempStreamingClient {
  logger: any;
  connected: boolean;
  _stanzaio: {
    disco: {
      addFeature (feature: string): void;
    };
    stanzas: Stanzas;
    on (...args: any[]): void;
  };
  on (...args: any[]): void;
}

type LoggerMethods = 'log' | 'debug' | 'info' | 'warn' | 'error';

interface ILogger {
  log (...args: any[]): void;
  debug (...args: any[]): void;
  info (...args: any[]): void;
  warn (...args: any[]): void;
  error (...args: any[]): void;
}
