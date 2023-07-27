
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

<Highlight color="#25c2a0">O-auth-2</Highlight> and <Highlight color="#1877F2">OIDC</Highlight> are most talked about at the moment.


### O-auth-2 sequence
OAuth2 is a protocol for authorization, allowing third-party applications to access resources on behalf of a user, without the user having to give their credentials to the third-party application. This is useful for scenarios such as allowing a mobile app to access a user's Google Drive files, without the user having to share their Google login credentials with the app.

<img src={"https://github.com/weekoflearning/documentations/assets/12728754/a411fc10-877b-485c-b5a9-48fb8e33e284"} alt="Example banner" />


### Oidc sequence 
OpenID Connect (OIDC) is built on top of OAuth2 and provides an authentication layer. OIDC allows a user to authenticate with an identity provider (such as Google or Facebook) and then receive a JSON Web Token (JWT) which can be used to prove their identity to other applications. This allows applications to trust the user's identity without having to handle the user's credentials directly.

```mermaid
sequenceDiagram
  participant User
  participant Client
  participant IdentityProvider
  User->>Client: Navigates to the client app
  Client->>IdentityProvider: Requests authentication
  IdentityProvider->>User: Prompts for authentication
  User-->>IdentityProvider: Authenticates
  IdentityProvider->>Client: Sends ID token and access token
  Client->>User: Navigates to client app with access token
```



:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

