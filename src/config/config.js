const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "minionsorder",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://dd6kzmyf1f.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_LwSr1TA6m",
      APP_CLIENT_ID: "341c88cs295smd552sjs05fgqi",
      IDENTITY_POOL_ID: "us-east-1:e515cfec-cb47-4821-9a83-3fabfce0e00e",
    },
  };
  
  export default config;