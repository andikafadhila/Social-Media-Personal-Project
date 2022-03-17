import {
  getProviders,
  getSession,
  signIn as SignIntoProvider,
} from "next-auth/react";
// Browser
function signIn({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => SignIntoProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}

//Server
export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
      session: await getSession(context),
    },
  };
}

export default signIn;