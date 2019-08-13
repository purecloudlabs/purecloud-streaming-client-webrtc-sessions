declare module 'jingle-media-data-session-purecloud' {
  import MediaSession, { MediaSessionOptions } from 'jingle-media-session-purecloud';

  export default class MediaDataSession extends MediaSession {
    readonly channels: { [key: string]: RTCDataChannel };
    constructor (options: MediaSessionOptions);
    start (offerOptions: any, next?: (() => void)): void;
    sendDirectly (channel: RTCDataChannel, messageType: string, creator: any, payload: any): boolean;
    getDataChannel (name: string, opts: any): RTCDataChannel; // opts: this.pc.createDataChannel(name, opts);
    handleDataChannelAdded (channel: RTCDataChannel): void;
    _observeDataChannel (channel: RTCDataChannel): void;
  }
}
