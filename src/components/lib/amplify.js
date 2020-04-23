import Amplify, {API} from 'aws-amplify';
import * as aws4 from 'aws4';
Amplify.configure({
    Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID 우리가
        identityPoolId: 'us-east-2:2ee8cfad-8240-4442-bea0-863efe7fd8af',
    // REQUIRED - Amazon Cognito Region
        region: 'us-east-2',
        mandatorySignIn: false,
    },

    

    API: {
        endpoints: [
            {
                name: "nespresso_coffee-API",
                endpoint: `https://h4v2u9dty6.execute-api.us-east-2.amazonaws.com/stage-1`,
                custom_header: async () => {
                    return {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                    }
                }
            }
        ]
    }
    });

export const get = async (path) => {
      const apiName = "nespresso_coffee-API";
      const signer = aws4.sign({
          region: 'us-east-2',
          hostname: 'https://h4v2u9dty6.execute-api.us-east-2.amazonaws.com/stage-1',
          path: path,
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'

          }
      }, {
          accessKeyId: 'AKIAS43YJXWCTAJ2QDFP',
          secretAccessKey: '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',
          sessionToken: null
      });
    
      const ops = {
          headers: {
            Authorization: 'Authorization:' + signer.headers.Authorization
          },
      }

      console.log(ops.headers.Authorization)
      return API.get(apiName, path, ops)
    }


    