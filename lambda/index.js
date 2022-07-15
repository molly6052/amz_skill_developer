/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = '研究室適性検査を始めるよ。2つの質問に答えてね。準備はいい?';

        //ここにAPLで作成したデザインを追加
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']){
            console.log("ユーザーのデバイスはAPLに対応しています");
        
            const documentName = "Labrecommend"; // オーサリングツールに保存されたドキュメントの名前
            const token = documentName + "Token";
        
            // RenderDocumentディレクティブを応答に追加します
            handlerInput.responseBuilder.addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                token: 'token',
                document: {
                    src: 'doc://alexa/apl/documents/' + documentName,
                    type: 'Link'
                },
                datasources: {
                    "aplData": {
                    "skillName": "エネルギー環境工学コース",
                    "textName": "研究室紹介",
                    "secondtextName": "〜オープンキャンパスへようこそ〜",
                    "skillImageUrl": "https://pbs.twimg.com/profile_images/976370597356716032/lnxEPYPG_400x400.jpg"
                    }
                }
            });
            
        } else {
            // デバイスがAPLに対応していないことをログに記録するだけです。
            // 実際のスキルでは、ユーザーに別の内容を読み上げることもできます。
            console.log("ユーザーのデバイスはAPLに対応していません。画面付きのデバイスで再テストしてください")
        }
        

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('準備はいい？')
            .getResponse();
    }
};

const ReadyIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ReadyIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'では質問するよ。「はい」か「いいえ」で答えてね。英語は好き？';
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']){
            console.log("ユーザーのデバイスはAPLに対応しています");
        
            const documentName = "ReadyDocument"; // オーサリングツールに保存されたドキュメントの名前
            const token = documentName + "Token";
        
            // RenderDocumentディレクティブを応答に追加します
            handlerInput.responseBuilder.addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                token: 'token',
                document: {
                    src: 'doc://alexa/apl/documents/' + documentName,
                    type: 'Link'
                },
                datasources: {
                    "aplData": {
                    "skillName": "エネルギー環境工学コース",
                    "textName": "研究室紹介",
                    "secondtextName": "〜オープンキャンパスへようこそ〜",
                    "skillImageUrl": "https://pbs.twimg.com/profile_images/976370597356716032/lnxEPYPG_400x400.jpg",
                    "comment": "以下の項目はプログラム内で動的にセットされる。(そのため、値を定義しておく必要ないんですが、ハンズオン時にオーサリングツールに直接貼り付けできるようにあえて残しています)",
                    "nowQuestionInfo": {
                        "questionDt": "英語は好き？",
                        "imageUrlA": "https://ocam.s3.ap-northeast-1.amazonaws.com/english.png"
                    }
                }
                }
            });
            
        } else {
            // デバイスがAPLに対応していないことをログに記録するだけです。
            // 実際のスキルでは、ユーザーに別の内容を読み上げることもできます。
            console.log("ユーザーのデバイスはAPLに対応していません。画面付きのデバイスで再テストしてください")
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('英語は好き？')
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const YesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'YesIntent';
    },
    handle(handlerInput) {
        const speakOutput = '次の質問をするよ。那覇マラソンに出たい？「出たい」か「いやだ」で答えてね。';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']){
            console.log("ユーザーのデバイスはAPLに対応しています");
        
            const documentName = "YesDocument"; // オーサリングツールに保存されたドキュメントの名前
            const token = documentName + "Token";
        
            // RenderDocumentディレクティブを応答に追加します
            handlerInput.responseBuilder.addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                token: 'token',
                document: {
                    src: 'doc://alexa/apl/documents/' + documentName,
                    type: 'Link'
                },
                datasources: {
                        "aplData": {
                        "skillName": "エネルギー環境工学コース",
                        "textName": "研究室紹介",
                        "secondtextName": "〜オープンキャンパスへようこそ〜",
                        "skillImageUrl": "https://pbs.twimg.com/profile_images/976370597356716032/lnxEPYPG_400x400.jpg",
                        "comment": "以下の項目はプログラム内で動的にセットされる。(そのため、値を定義しておく必要ないんですが、ハンズオン時にオーサリングツールに直接貼り付けできるようにあえて残しています)",
                        "nowQuestionInfo": {
                            "questionDt": "那覇マラソンに出たい？",
                            "imageUrlA": "https://ocam.s3.ap-northeast-1.amazonaws.com/%E9%82%A3%E8%A6%87%E3%83%9E%E3%83%A9%E3%82%BD%E3%83%B3.png"
                        }
                    }
                }
            });
            
        } else {
            // デバイスがAPLに対応していないことをログに記録するだけです。
            // 実際のスキルでは、ユーザーに別の内容を読み上げることもできます。
            console.log("ユーザーのデバイスはAPLに対応していません。画面付きのデバイスで再テストしてください")
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('那覇マラソンに出たい？')
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const YestwoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'YestwoIntent';
    },
    handle(handlerInput) {
        const speakOutput = '君には押川研究室をおすすめするよ。押川先生は金属のサビについて研究しているんだ。高温多湿な沖縄ではどんなふうに金属が錆びていくか知ることはとっても重要なんだ。また、押川先生は毎年那覇マラソンに参加しているんだ。先生自身はまったく錆びていないね。haha';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']){
            console.log("ユーザーのデバイスはAPLに対応しています");
        
            const documentName = "YestwoDocument"; // オーサリングツールに保存されたドキュメントの名前
            const token = documentName + "Token";
        
            // RenderDocumentディレクティブを応答に追加します
            handlerInput.responseBuilder.addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                token: 'token',
                document: {
                    src: 'doc://alexa/apl/documents/' + documentName,
                    type: 'Link'
                },
                datasources: {
                        "aplData": {
                        "skillName": "エネルギー環境工学コース",
                        "textName": "研究室紹介",
                        "secondtextName": "〜オープンキャンパスへようこそ〜",
                        "skillImageUrl": "https://pbs.twimg.com/profile_images/976370597356716032/lnxEPYPG_400x400.jpg",
                        "comment": "以下の項目はプログラム内で動的にセットされる。(そのため、値を定義しておく必要ないんですが、ハンズオン時にオーサリングツールに直接貼り付けできるようにあえて残しています)",
                        "nowQuestionInfo": {
                            "questionDt": "押川研究室だよ！",
                            "primaryText1": "押川先生は金属のサビについて研究しているんだ。",
                            "primaryText2": "高温多湿な沖縄ではどんなふうに金属が",
                            "primaryText3": "錆びていくか知ることはとっても重要なんだ。",
                            "primaryText4": "また、押川先生は毎年那覇マラソンに参加しているんだ。",
                            "primaryText5": "先生自身はまったく錆びていないね。haha",
                            "imageUrlA": "https://ocam.s3.ap-northeast-1.amazonaws.com/%E6%8A%BC%E5%B7%9D%E5%85%88%E7%94%9F+.png"
        }
    }
                }
            });
            
        } else {
            // デバイスがAPLに対応していないことをログに記録するだけです。
            // 実際のスキルでは、ユーザーに別の内容を読み上げることもできます。
            console.log("ユーザーのデバイスはAPLに対応していません。画面付きのデバイスで再テストしてください")
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const YesthreeIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'YesthreeIntent';
    },
    handle(handlerInput) {
        const speakOutput = '君には末吉研究室をおすすめするよ。末吉先生は、力と変形について研究しているよ。マンションや立体駐車場、橋などが変形したり破損しないようにする重要な研究なんだもの作りに興味がある人は、ぜひエネ環にきてね';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']){
            console.log("ユーザーのデバイスはAPLに対応しています");
        
            const documentName = "YesthreeDocument"; // オーサリングツールに保存されたドキュメントの名前
            const token = documentName + "Token";
        
            // RenderDocumentディレクティブを応答に追加します
            handlerInput.responseBuilder.addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                token: 'token',
                document: {
                    src: 'doc://alexa/apl/documents/' + documentName,
                    type: 'Link'
                },
                datasources: {
                        "aplData": {
                        "skillName": "エネルギー環境工学コース",
                        "textName": "研究室紹介",
                        "secondtextName": "〜オープンキャンパスへようこそ〜",
                        "skillImageUrl": "https://pbs.twimg.com/profile_images/976370597356716032/lnxEPYPG_400x400.jpg",
                        "comment": "",
                        "nowQuestionInfo": {
                            "questionDt": "末吉研究室だよ！",
                            "primaryText1": "末吉先生は、力と変形について研究しているよ。",
                            "primaryText2": "マンションや立体駐車場、橋などが",
                            "primaryText3": "変形したり破損しないようにする重要な研究なんだ。",
                            "primaryText4": "もの作りに興味がある人は",
                            "primaryText5": "ぜひエネ環にきてね",
                            "imageUrlA": "https://ocam.s3.ap-northeast-1.amazonaws.com/%E6%9C%AB%E5%90%89%E5%85%88%E7%94%9F.png"
                        }
                }
                }
            });
            
        } else {
            // デバイスがAPLに対応していないことをログに記録するだけです。
            // 実際のスキルでは、ユーザーに別の内容を読み上げることもできます。
            console.log("ユーザーのデバイスはAPLに対応していません。画面付きのデバイスで再テストしてください")
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const NoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'NoIntent';
    },
    handle(handlerInput) {
        const speakOutput = '次の質問をするよ。特撮に興味がある？「Yes」か「No」で答えてね。';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']){
            console.log("ユーザーのデバイスはAPLに対応しています");
        
            const documentName = "NoDocument"; // オーサリングツールに保存されたドキュメントの名前
            const token = documentName + "Token";
        
            // RenderDocumentディレクティブを応答に追加します
            handlerInput.responseBuilder.addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                token: 'token',
                document: {
                    src: 'doc://alexa/apl/documents/' + documentName,
                    type: 'Link'
                },
                datasources: {
                            "aplData": {
                            "skillName": "エネルギー環境工学コース",
                            "textName": "研究室紹介",
                            "secondtextName": "〜オープンキャンパスへようこそ〜",
                            "skillImageUrl": "https://pbs.twimg.com/profile_images/976370597356716032/lnxEPYPG_400x400.jpg",
                            "comment": "以下の項目はプログラム内で動的にセットされる。(そのため、値を定義しておく必要ないんですが、ハンズオン時にオーサリングツールに直接貼り付けできるようにあえて残しています)",
                            "nowQuestionInfo": {
                                "questionDt": "特撮に興味がある？",
                                "imageUrlA": "https://ocam.s3.ap-northeast-1.amazonaws.com/tokusatu+.png"
                            }
                        }
                }
            });
            
        } else {
            // デバイスがAPLに対応していないことをログに記録するだけです。
            // 実際のスキルでは、ユーザーに別の内容を読み上げることもできます。
            console.log("ユーザーのデバイスはAPLに対応していません。画面付きのデバイスで再テストしてください")
        }
        //
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('特撮に興味がある？')
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const NotwoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'NotwoIntent';
    },
    handle(handlerInput) {
        const speakOutput = '君には近藤研究室をおすすめするよ。近藤先生は、建物を作る時や車を作るときに使われる金属の材料について研究しているよものによって、適切な材料を選ぶことは大切なんだ';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']){
            console.log("ユーザーのデバイスはAPLに対応しています");
        
            const documentName = "NotwoDocument"; // オーサリングツールに保存されたドキュメントの名前
            const token = documentName + "Token";
        
            // RenderDocumentディレクティブを応答に追加します
            handlerInput.responseBuilder.addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                token: 'token',
                document: {
                    src: 'doc://alexa/apl/documents/' + documentName,
                    type: 'Link'
                },
                datasources: {
                    "aplData": {
                    "skillName": "エネルギー環境工学コース",
                    "textName": "研究室紹介",
                    "secondtextName": "〜オープンキャンパスへようこそ〜",
                    "skillImageUrl": "https://pbs.twimg.com/profile_images/976370597356716032/lnxEPYPG_400x400.jpg",
                    "comment": "",
                    "nowQuestionInfo": {
                        "questionDt": "近藤研究室だよ!",
                        "primaryText1": "近藤先生は、建物を作る時や車を作るときに",
                        "primaryText2": "使われる金属の材料について研究しているよ",
                        "primaryText3": "ものによって、適切な材料を選ぶことは大切なんだ",
                        "primaryText4": "",
                        "primaryText5": "",
                        "imageUrlA": "https://ocam.s3.ap-northeast-1.amazonaws.com/%E8%BF%91%E8%97%A4%E5%85%88%E7%94%9F.png"
                    }
                }
                }
            });
            
        } else {
            // デバイスがAPLに対応していないことをログに記録するだけです。
            // 実際のスキルでは、ユーザーに別の内容を読み上げることもできます。
            console.log("ユーザーのデバイスはAPLに対応していません。画面付きのデバイスで再テストしてください")
        }
        //
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const NothreeIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'NothreeIntent';
    },
    handle(handlerInput) {
        const speakOutput = '君には押川研究室をおすすめするよ。押川先生は金属のサビについて研究しているんだ。高温多湿な沖縄ではどんなふうに金属が錆びていくか知ることはとっても重要なんだ。また、押川先生は毎年那覇マラソンに参加しているんだ。先生自身はまったく錆びていないね。haha';


        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']){
            console.log("ユーザーのデバイスはAPLに対応しています");
        
            const documentName = "NothreeDocument"; // オーサリングツールに保存されたドキュメントの名前
            const token = documentName + "Token";
        
            // RenderDocumentディレクティブを応答に追加します
            handlerInput.responseBuilder.addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                token: 'token',
                document: {
                    src: 'doc://alexa/apl/documents/' + documentName,
                    type: 'Link'
                },
                datasources: {
                    "aplData": {
                    "skillName": "エネルギー環境工学コース",
                    "textName": "研究室紹介",
                    "secondtextName": "〜オープンキャンパスへようこそ〜",
                    "skillImageUrl": "https://pbs.twimg.com/profile_images/976370597356716032/lnxEPYPG_400x400.jpg",
                    "comment": "",
                    "nowQuestionInfo": {
                        "questionDt": "押川研究室だよ！",
                            "primaryText1": "押川先生は金属のサビについて研究しているんだ。",
                            "primaryText2": "高温多湿な沖縄ではどんなふうに金属が",
                            "primaryText3": "錆びていくか知ることはとっても重要なんだ。",
                            "primaryText4": "また、押川先生は毎年那覇マラソンに参加しているんだ。",
                            "primaryText5": "先生自身はまったく錆びていないね。haha",
                            "imageUrlA": "https://ocam.s3.ap-northeast-1.amazonaws.com/%E6%8A%BC%E5%B7%9D%E5%85%88%E7%94%9F+.png"
                    }
                }
                }
            });
            
        } else {
            // デバイスがAPLに対応していないことをログに記録するだけです。
            // 実際のスキルでは、ユーザーに別の内容を読み上げることもできます。
            console.log("ユーザーのデバイスはAPLに対応していません。画面付きのデバイスで再テストしてください")
        }
        //
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'どうかしましたか?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'またね!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        ReadyIntentHandler,
        YesIntentHandler,
        YestwoIntentHandler,
        YesthreeIntentHandler,
        NoIntentHandler,
        NotwoIntentHandler,
        NothreeIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .lambda();