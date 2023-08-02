import { IResolveParams, LoginSocialFacebook } from "reactjs-social-login";

interface LoginFacebookProps {
  login: Function;
}

const LoginFacebook: React.FC<LoginFacebookProps> = ({ login }) => {
  const onResponse = ({ data }: IResolveParams) => {
    const dataObjet = {
      access_token: data?.accessToken,
      isOAuth: true,
      OAuthType: "facebook",
    };

    login(dataObjet);
  };

  return (
    <>
      <>
        <LoginSocialFacebook
          isOnlyGetToken
          appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || ""}
          onResolve={onResponse}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <button type="button" className="btn btn-submit">
            Login with facebook
          </button>
        </LoginSocialFacebook>
      </>
    </>
  );
};

export default LoginFacebook;
