import Amplify, {API} from 'aws-amplify';
import * as aws4 from 'aws4';
Amplify.configure({
    Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID 우리가
        identityPoolId: 'us-east-2:2ee8cfad-8240-4442-bea0-863efe7fd8af',
    // REQUIRED - Amazon Cognito Region
        region: 'us-east-2',
    // OPTIONAL - Amazon Cognito User Pool ID 제삼자!!
        // userPoolId: 'us-east-2_xDRUmu8Qd',
    // OPTIONAL - Amazon Cognito Web Client ID
        // userPoolWebClientId: '212u7qa5r4of797jttatvupg8s',

        mandatorySignIn: false,

        // cookieStorage: {
        //     domain: '*',
        //     // expiration date
        //     expires: 1,
        //     secure: true
        // }
    },

    

    API: {
        endpoints: [
            {
                name: "nespresso_coffee-API",
                endpoint: `https://h4v2u9dty6.execute-api.us-east-2.amazonaws.com/stage-1`,
                custom_header: async () => {
                    return {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'text/csv',
                    // 'Accept': 'text/csv',
                    'Accept': 'application/json'
                    }
                }
            }
        ]
    }
    });

export const get = async (path) => {
        // console.log('WHAT IS PARAMETupER IN GET METHOD', schoolID, options)
    
        // PRINT: print parameters
        // PRINT: version
        // console.log('version', version)
    //   let user = await Auth.currentAuthenticatedUser();
    //   let idToken = user.signInUserSession.idToken.jwtToken;
    //   let accessToken = user.signInUserSession.accessToken.jwtToken;
      const apiName = "nespresso_coffee-API";
      const signer = aws4.sign({
        //   service: 'execute-api',
          region: 'us-east-2',
          hostname: 'https://h4v2u9dty6.execute-api.us-east-2.amazonaws.com/stage-1',
          path: path,
          headers: {
              'Content-Type': 'application/json',
            //   'Token': idToken,
            // Authorization: {
                
            // } 
              'Accept': 'application/json'
    
            
    
            //   'Content-Type': 'text/csv',
            // 'Accept': 'text/csv',
            // 'Accept': 'text/comma-separated-values',
            // 'Content-Type': 'text/comma-separated-values'
          }
      }, {
          accessKeyId: 'AKIAS43YJXWCTNCK26US',
          secretAccessKey: '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',
          sessionToken: null
      });
    
    //   console.log('options', {...options})
    //   const concat_ops = {...options, 'Token': user.signInUserSession.accessToken.jwtToken}
    
    // 'Token': user.signInUserSession.accessToken.jwtToken
    //   const concat_ops = {...options}
    //   let header_token = idToken;
    //   if (use_access_token) {
        // header_token = accessToken;
    //   }
      const ops = {
          headers: {
            // Token: header_token,
            Authorization: 'Authorization:' + signer.headers.Authorization
          },
      }

      console.log(ops.headers.Authorization)
      return API.get(apiName, path, ops)
    }