### HTLML
* When using the `<img />` tag, always provide alternative text using the `alt` attribute for webiste readers. This will for example help visually impaired individuals scan/read through the webiste withoou seeing a thing 
* the `public folder 📁` in in th HTML projects usually contains all the .HTML files that are not index.html

### CSS
* The `id = ""` attribute identifies elements uniqely while the `class = ""` attribute can be shared by multiple elements.
* ` a pt ( a point metric) ` is what MS office uses. E.g when the font siz is 12, it implies  12 pt (12 points). This can give a rough idea of the font-size/weight one is setting. A `px` is smaller.`em` is ralative to the parent and   `rem is raltive` to the root element e.g `<html> </html>`
* In CSS, font-size adjusts text size while font-weight controls text thickness or boldness.
* Use the `div elemetn`to layout or style elements together. It groups elements.
* use the `pesticide` extension to visualise `<div> </div>`
* The `height` and `width` properties are for the inner most box (where the content of the element is to be placed). This can pause challnegs when calculating the dimentions of your element. To resolve this, use the `box-sizing: border-box` property. This which make the height and width property refere to the height of the elememt up to the border (excluding the margin). This can simplify calcualtions.<br><br>
##### Behavior of an Unstyled Inner `<div>`

- **Block-Level**: Starts on a new line, extends full available width.
- **No Visual Distinction**: Appears the same as its parent without specific CSS.
- **Inheritance**: Inherits font and color properties from parent.
- **Margins and Padding**: Defaults to no margins or padding unless specified.
- **Content Flow**: Contains elements (e.g., `<p>`) that also behave as block-level. <br> <br>

>CSS Cascading levels
![cascading levels](./css_cascading_levels.jpg)

>Combining selectors in CSS
![Combining Css Selectors Image](./combining_selectors.png)
![Combining Css Selectors Image](./combining_selectors_2.png)

## CSS Positioning

#### Static
- **Default position:** Elements follow the normal document flow, stacking one after the other.
- **Offsets:** (`top`, `right`, `bottom`, `left`) do not apply.

#### Relative
- **Position:** Moves an element relative to its normal position in the document flow.

#### Absolute
- **Position:** Relative to the nearest parent with a non-static position. If no such parent exists, it positions relative to the initial containing block (typically the HTML document).

### Fixed
- **Position:** Fixed relative to the viewport, unaffected by scrolling.

### Z-index (Stacking Context)
- Think of it like the z axis coming out of the screen. The highert the z-axis value, the more top/ outer the element is the `default value is 0`. Values can be negative as well.

## CSS `display` Property 

- **Block** (default): Each element starts on a new line and extends across the full available width.
- **Inline**: Elements line up one after another horizontally, like words in a sentence. They only take up as much space as their content needs.
- **Inline-Block**: Combines features of both inline and block. Elements line up horizontally but you can set their width and height.
- **None**: Completely hides the element, making it invisible and unclickable.

# Flexbox
> There are two axis: The main-axis(horizontal by default) and the cros-axis(perpendicular to the main). The `flex-direction` determines the direction of the main axis. The  `justify-content` property aligns items along the main a-xis
while the `align-content` property aligns along the main-axis.

### Flexbox Sizing and Default Values

Flexbox provides several properties to manage the sizing of items within a container. Understanding the default values and how these properties interact is crucial for mastering layout with Flexbox.

#### Default Values

- **`flex-grow`**: The default value is `0`. This means, by default, flex items won't grow beyond their initial size to fill the container.
- **`flex-shrink`**: The default value is `1`. This implies that flex items can shrink if necessary, to prevent overflowing the container.
- **`flex-basis`**: The default value is `auto`, meaning the size of the item is based on its content or specified dimensions.
- **`flex`**: The shorthand defaults to `0 1 auto`, which combines the three properties: `flex-grow: 0`, `flex-shrink: 1`, `flex-basis: auto`.

#### Size Calculation Priority

Flexbox sizing follows a specific order of priority when calculating the actual size of an item:

1. **Content size**: If `flex-basis` is set to `auto`, the size of the content determines the base size. If there's no explicit size set, the content's natural size is used.
2. **Width/Height**: If specified, this will override the content size unless `flex-basis` is set to something other than `auto`.
3. **`flex-basis`**: This property takes priority over the content size but can be overridden by explicitly set width/height. If `flex-basis` is set to any specific value (like `50%`, `200px`, etc.), it dictates the starting size before flex-grow or flex-shrink are applied.
4. **`min-width`/`max-width`**: These constraints apply last and can override all previous settings. `min-width` ensures a flex item cannot be smaller than the specified value, regardless of the `flex-shrink` settings, while `max-width` ensures that the flex item cannot grow larger than the specified value, regardless of the `flex-grow` settings.

### Understanding the Flexbox Shorthand: `flex`

The `flex` property is a shorthand for setting `flex-grow`, `flex-shrink`, and `flex-basis` together. It simplifies the configuration of flex items within a container.

#### Syntax
- **General form**: `flex: [flex-grow] [flex-shrink] [flex-basis]`
- **Common usage**: `flex: 1` or `flex: 0 1 auto`

#### Components
- **`flex-grow`**: Controls the proportion of available space the item should take after filling the initial size. A value of `0` means no expansion.
- **`flex-shrink`**: Dictates how the item should shrink relative to others in the container. A value of `0` prevents it from shrinking.
- **`flex-basis`**: Sets the initial main size of the item before remaining space is distributed. Specifying this as a percentage (`10%`, `50%`, etc.) sets the size relative to the container's size.

#### Example
- **`flex: 1 0 10%`**: The item will grow to fill extra space if available, will not shrink, and starts with a size of 10% of the container’s total size.

### Display-Grid
- When grid-items using the `grid-area` property, ensure that all the related components are using the same property for things to work out well.
- `grid-area: top/left/bottom/right`

# Bootstrap
- To overwite bootrap css using an external style sheet, place the link for the external CSS below the Boostrap one.
- `col-size(sm/lg/xlg etc) val` implies the size of the compopent when the screen size of the display is of size and above. e.g `col-lg-6` implies occupying 6 cols for screens that are `lg` and above.  
**Note:** If the screen size comes below that specified, the class defaults to `col` (to full width).

# UI/UX
> Color theory
![Color theory](./color_moods.png)

>Font theory
![Font theory](./font_theory.png)


---
---

# Javascript

- `===` evaluates both the datatype and value. `==` does not care about the data type. Similary, use `!==`.
- `() =>` Arrow functions do not have their own this context. Instead, they inherit this from the surrounding lexical scope. This makes them unsuitable for event handlers if you need this to refer to the event target. However, they are useful in other contexts where you want to maintain the this context from the enclosing scope.
- Can't compare lists like in python.

#### Async await, promises and callbacks.
- In js, none blocking code (asynchronous code) is pull await from the single executing thread buy browser or nodejs mechanisms, tracked and placed back in the thread after execution.
- `Async await`, is syntactic sugar around promises. It always returns a promise. You can then go ahead to use the then and catch methods on what is returned if need b.
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# Types of Authentication

## 1. No Authentication
- **Description**: No authentication is required to access the resource.
- **Use Case**: Public information or resources.

## 2. Basic Authentication
- **Description**: User provides a username and password with each request.
- **Use/Authentication Process**:
  - User sends a request with a username and password encoded in the `Authorization` header.
  - Server decodes the credentials and verifies them.
  - Access is granted if credentials are correct.
- **Implementation**:
  - Username and password are base64 encoded and included in the `Authorization` header.
  - Example header: `Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=`
- **Security**:
  - Passwords should be hashed before storing in the database (e.g., using bcrypt).
  - Passwords are transmitted with each request, so use HTTPS to encrypt the connection.

```plaintext
Database:
| Username | Hashed Password                       |
|----------|---------------------------------------|
| alice123 | $2a$12$Wz/tQH4bJtWhuC9fVBSjb.e5BFLnPA |
```

## 3. API Key Authentication
- **Description**: A unique API key is provided to access the resource.
- **Use/Authentication Process**:
  - User includes the API key in the request header or as a query parameter.
  - Server verifies the API key.
  - Access is granted if the API key is valid.
- **Implementation**:
  - The server issues a unique API key to the user.
  - The user includes the API key in the request header or as a query parameter.
  - Example header: `Authorization: ApiKey 123456789abcdef`
- **Security**:
  - API keys should be stored securely and not exposed in client-side code.
  - Rotate API keys periodically and revoke compromised keys.

```plaintext
Database:
| User ID | API Key                                |
|---------|----------------------------------------|
| 1       | 123456789abcdef                       |
```

## 4. Token-Based Authentication
- **Description**: Verifies a user's identity and manages sessions using tokens.
- **Use/Authentication Process**:
  - User logs in with username and password.
  - Server verifies credentials and issues a token.
  - User stores the token and includes it in the `Authorization` header for subsequent requests.
  - Server verifies the token on each request.
  - Access is granted if the token is valid.
- **Implementation**:
  - User logs in with username and password.
  - Server issues a token (e.g., JWT) upon successful login.
  - User includes the token in the `Authorization` header for subsequent requests.
  - Example header: `Authorization: Bearer abc123xyz789`
- **Security**:
  - Tokens should be signed and can include expiration times.
  - Use HTTPS to secure token transmission.
  - Tokens should be stored securely on the client side.

```plaintext
Database:
| Username | Hashed Password                       | JWT Secret Key                        |
|----------|---------------------------------------|---------------------------------------|
| alice123 | $2a$12$Wz/tQH4bJtWhuC9fVBSjb.e5BFLnPA | 4b9824f529bf965e1aaf0b8c3b2e8e10     |
```

## 5. OAuth with OpenID Connect
- **Description**: Authorizes third-party applications to access user resources and can also handle authentication.
- **Use/Authentication Process**:
  - User is redirected to the OAuth provider (e.g., Google) for authentication.
  - User logs in and consents to share information.
  - Provider issues an authorization code.
  - Application exchanges the code for access and ID tokens.
  - Application verifies the ID token and uses it to authenticate the user.
- **Implementation**:
  - User is redirected to the OAuth provider with `client_id`, `redirect_uri`, `response_type`, and `scope`.
  - User logs in and consents to share information.
  - Provider redirects back with an authorization code.
  - Application exchanges the authorization code for tokens.
  - Example header: `Authorization: Bearer access_token`
- **Security**:
  - Tokens are short-lived and can be revoked.
  - Scopes and permissions can be fine-tuned.
  - Use HTTPS to secure token transmission and redirections.

```plaintext
Database:
| User ID | OAuth Provider | OAuth ID                  | Session Token                        |
|---------|----------------|---------------------------|--------------------------------------|
| 1       | Google         | 1234567890abcdef          | abc123xyz789                         |
```

## Summary
- **No Authentication**: Public access with no security.
- **Basic Authentication**: Simple but transmits credentials with each request.
- **API Key Authentication**: Provides a unique key, but key management is crucial.
- **Token-Based Authentication**: Secure session management with tokens.
- **OAuth with OpenID Connect**: Robust authorization and authentication using third-party providers.

>## Examples

### 1) Token-Based Authentication for Library Application

### Overview
Token-based authentication verifies a user's identity and manages sessions using tokens.

### Steps

1. **User Registration**
   - User provides username and password.
   - Server hashes the password and stores username and hashed password.

2. **User Login**
   - User logs in with username and password.

3. **Token Issuance**
   - Server verifies credentials.
   - Server issues a token (e.g., JWT) if credentials are correct.

4. **Token Storage**
   - User stores the token on their device (e.g., in local storage).

5. **Subsequent Requests**
   - User includes the token in request headers.

6. **Token Verification**
   - Server verifies the token on each request.

7. **Access Granted**
   - If the token is valid, the server processes the request and grants access.

### Summary
- **User Registration**: Store hashed passwords securely.
- **User Login**: Authenticate using username and password.
- **Token Issuance**: Issue a token upon successful login.
- **Token Storage**: User stores the token locally.
- **Token Usage**: Include token in request headers for subsequent requests.
- **Token Verification**: Server verifies token validity on each request.
- **Access Control**: Grant access based on token validity.

### 2) OAuth with OpenID Connect for Library Application

#### Overview
OAuth with OpenID Connect authenticates users via a third-party provider (like Google) and manages sessions in the library application.

#### Steps

1. **User Initiates Sign Up/Sign In**
   - Click "Sign in with Google."

2. **Redirect to Google for Authentication**
   - Redirect to Google's OAuth server with `client_id`, `redirect_uri`, `response_type`, and `scope`.

3. **User Authenticates with Google**
   - Log in and consent to share information.

4. **Google Sends Authorization Code to Library**
   - Google redirects back with an authorization code.

5. **Library Exchanges Authorization Code for Tokens**
   - Exchange authorization code for access and ID tokens.

6. **Google Returns Tokens**
   - Receive access and ID tokens.

7. **Library Verifies and Uses ID Token**
   - Verify ID token and retrieve user information (e.g., email, Google ID).
   - Sign up/sign in user and issue session token.

8. **User is Signed In**
   - Create session and issue session token for accessing resources.

#### Summary
- **Authenticate via Google**: Use OAuth and OpenID Connect.
- **User Info**: Retrieve and verify user info from ID token.
- **Session Management**: Library issues its own session token.
- **Resource Access**: Use library's session token to access resources.


Understood. Here’s a shorter version:


## 3) Bearer Authentication (type of token based authentication)

## Description
Uses a token in the request header to access resources. The token grants access.

## Process
1. **Login**: User logs in with credentials.
2. **Token Issuance**: Server issues a token.
3. **Requests**: Client sends token in `Authorization` header.
4. **Verification**: Server verifies the token.
5. **Access**: Access granted if token is valid.

## Implementation
- **Header Example**: `Authorization: Bearer abc123xyz789`
- **Token**: Server generates token (e.g., JWT).

## Security
- **Signed Tokens**: Prevent tampering.
- **Expiration**: Tokens should expire.
- **HTTPS**: Secure transmission.
- **Secure Storage**: Store tokens securely.

## Example

### Login Request
```http
POST /login
{
    "username": "alice",
    "password": "password123"
}
```

### Server Response
```json
{
    "token": "abc123xyz789"
}
```

### Authenticated Request
```http
GET /protected-resource
Authorization: Bearer abc123xyz789
```

## Summary
Bearer authentication uses tokens for secure access to resources. It's more secure than basic and API key authentication.

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# Types of Authorization

## 1. No Authorization
- **Description**: No authorization is required to access resources.
- **Use Case**: Public resources or information.
- **Implementation**: No checks are performed.
- **Security**: No security controls.

## 2. Role-Based Access Control (RBAC)
- **Description**: Access is granted based on the user's role.
- **Use/Authorization Process**:
  - User is assigned one or more roles (e.g., admin, user).
  - Each role has permissions to access specific resources.
  - Server checks the user's role to determine access.
- **Implementation**:
  - Define roles and permissions.
  - Assign roles to users.
  - Check roles during resource access.

```plaintext
Database:
| User ID | Role   |
|---------|--------|
| 1       | admin  |
| 2       | user   |

Permissions:
| Role   | Resource    | Action |
|--------|-------------|--------|
| admin  | /users      | GET    |
| admin  | /users      | POST   |
| user   | /profile    | GET    |
```

- **Security**:
  - Ensure roles and permissions are properly defined.
  - Regularly review and update roles.

## 3. Attribute-Based Access Control (ABAC)
- **Description**: Access is granted based on attributes of the user, resource, and environment.
- **Use/Authorization Process**:
  - Define policies based on attributes (e.g., user role, resource type, time of day).
  - Check policies during resource access.
- **Implementation**:
  - Define attributes and policies.
  - Evaluate policies during access requests.

```plaintext
Database:
| User ID | Attributes                      |
|---------|---------------------------------|
| 1       | {"role": "admin", "department": "HR"} |
| 2       | {"role": "user", "department": "IT"}  |

Policies:
| Attribute              | Resource | Action | Condition             |
|------------------------|----------|--------|-----------------------|
| role == "admin"        | /users   | GET    |                       |
| role == "user"         | /profile | GET    |                       |
| department == "HR"     | /payroll | GET    | time < 18:00          |
```

- **Security**:
  - Ensure policies are comprehensive and up-to-date.
  - Regularly audit attribute data.

## 4. OAuth 2.0 Scopes and Permissions
- **Description**: Access is granted based on scopes and permissions defined in OAuth tokens.
- **Use/Authorization Process**:
  - User grants permissions (scopes) to an application.
  - Access token includes granted scopes.
  - Server checks scopes in the token to determine access.
- **Implementation**:
  - Define scopes and permissions.
  - Include scopes in access tokens.
  - Check scopes during resource access.

```plaintext
Access Token:
{
    "scopes": ["read_profile", "write_profile"]
}

Database:
| Scope           | Resource    | Action |
|-----------------|-------------|--------|
| read_profile    | /profile    | GET    |
| write_profile   | /profile    | POST   |
```

- **Security**:
  - Limit scopes to the minimum necessary permissions.
  - Use short-lived access tokens.

## 5. Policy-Based Access Control (PBAC)
- **Description**: Access is granted based on complex policies that can include roles, attributes, and environmental conditions.
- **Use/Authorization Process**:
  - Define detailed policies combining roles, attributes, and conditions.
  - Evaluate policies during access requests.
- **Implementation**:
  - Define policies using a policy language (e.g., XACML).
  - Use a policy decision point (PDP) to evaluate policies.

```plaintext
Policies:
<PolicySet>
    <Policy>
        <Rule Effect="Permit">
            <Condition>
                <Apply FunctionId="urn:oasis:names:tc:xacml:1.0:function:string-equal">
                    <AttributeValue>admin</AttributeValue>
                    <AttributeDesignator AttributeId="role" />
                </Apply>
            </Condition>
        </Rule>
    </Policy>
</PolicySet>
```

- **Security**:
  - Ensure policies are comprehensive and correctly implemented.
  - Regularly audit and update policies.

## Summary
- **No Authorization**: Public access with no controls.
- **Role-Based Access Control (RBAC)**: Simple, role-based permissions.
- **Attribute-Based Access Control (ABAC)**: Flexible, attribute-based policies.
- **OAuth 2.0 Scopes and Permissions**: Fine-grained permissions using OAuth tokens.
- **Policy-Based Access Control (PBAC)**: Complex, detailed policy evaluation.

>>>>>>>>>>>>>>>

### JWT (JSON Web Token) Summary

#### What is JWT?

JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as a JSON object. It is commonly used for authentication and information exchange.

#### Structure of JWT

A JWT consists of three parts separated by dots (.):

1. **Header**: Contains metadata about the token, such as the type of token (JWT) and the signing algorithm (e.g., HMAC SHA256 or RSA).
2. **Payload**: Contains the claims. Claims are statements about an entity (typically, the user) and additional data.
3. **Signature**: Used to verify the token's integrity and authenticity. It is created by encoding the header and payload and signing them with a secret key or a private key.

Example JWT:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

#### Header

The header typically consists of two parts:
- **alg**: The signing algorithm being used (e.g., HS256).
- **typ**: The type of token (JWT).

Example:
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

#### Payload

The payload contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims:
- **Registered claims**: Predefined claims that are not mandatory but recommended, e.g., `iss` (issuer), `exp` (expiration time), `sub` (subject), `aud` (audience).
- **Public claims**: Custom claims created to share information, such as user ID or roles.
- **Private claims**: Custom claims created to share information between parties that agree on using them.

Example:
```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true,
  "iat": 1516239022
}
```

#### Signature

To create the signature part, you have to take the encoded header, the encoded payload, a secret, and the algorithm specified in the header. The signature is used to verify the token's integrity and authenticity.

Example using HMAC SHA256:
```
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret
)
```

#### How JWT Works

1. **User Authentication**: When a user logs in, the server validates the credentials and issues a JWT.
2. **Token Storage**: The client stores the JWT, typically in local storage or a cookie.
3. **Subsequent Requests**: The client includes the JWT in the `Authorization` header of subsequent requests.
4. **Token Verification**: The server verifies the JWT's signature and extracts the claims to determine the user's identity and permissions.

#### JWT Usage in HTTP Requests

The JWT is usually sent in the HTTP `Authorization` header using the Bearer schema:

```
Authorization: Bearer <token>
```

#### Security Considerations

1. **Secret Management**: Keep your signing key secret and rotate it periodically.
2. **Expiration**: Always set an expiration (`exp`) claim to limit the token's lifespan.
3. **HTTPS**: Always use HTTPS to prevent token interception.
4. **Algorithm Confusion**: Avoid using the `alg` parameter in a way that allows attackers to choose an insecure algorithm.

#### JWT Libraries

There are various libraries available to work with JWT in different programming languages:

- **Node.js**: `jsonwebtoken`
- **Python**: `PyJWT`
- **Java**: `jjwt`
- **Go**: `golang-jwt`

### Example Implementation

#### Node.js Example

Install the `jsonwebtoken` library:

```bash
npm install jsonwebtoken
```

Create and verify a token:

```javascript
const jwt = require('jsonwebtoken');

const payload = { name: "John Doe", admin: true };
const secret = 'your-256-bit-secret';
const options = { expiresIn: '1h' };

// Create a token
const token = jwt.sign(payload, secret, options);
console.log('Token:', token);

// Verify a token
jwt.verify(token, secret, (err, decoded) => {
  if (err) {
    console.log('Token verification failed:', err);
  } else {
    console.log('Decoded payload:', decoded);
  }
});
```

### Conclusion

JWT is a robust and widely-used standard for securely transmitting information between parties. By understanding its structure, usage, and security considerations, you can effectively implement JWT for authentication and secure data exchange in your applications.