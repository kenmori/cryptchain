const PubNub = require('pubnub');

// https://admin.pubnub.com/#/user/624685/account/624618/app/35505910/key/1248543
const credentials = {
  publishKey: 'pub-c-48ded757-6094-4c83-a684-0e31a2112c69',
  subscribeKey: 'sub-c-cd291181-9b1d-4e98-9231-fb931a833819',
  secretKey: 'sec-c-NzI2OGFjYzMtZWZhYy00ZjA3LWIyZjctZDk0Y2ZhNjNmNmY5'
};

const CHANNELS = {
  TEST: 'TEST'
};

class PubSub {
  constructor() {
    this.pubnub = new PubNub(credentials);

    this.pubnub.subscribe({ channels: Object.values(CHANNELS) });

    this.pubnub.addListener(this.listener());
  }

  listener() {
    return {
      message: messageObject => {
        const { channel, message } = messageObject;

        console.log(`Message received. Channel: ${channel}. Message; ${message}`);
      }
    };
  }

  publish({ channel, message }) {
    this.pubnub.publish({ channel, message });
  }
}

const testPubSub = new PubSub();
testPubSub.publish({ channel: CHANNELS.TEST, message: 'hello pubnub' });

module.exports = PubSub;
