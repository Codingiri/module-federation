# Harnessing Module Federation and Micro-Frontends for Modern Web Development

In the dynamic realm of web development, the paradigms of Module Federation and Micro-Frontends have emerged as pivotal strategies. They provide developers with the tools to disassemble monolithic web applications into discrete, self-contained components. This article offers a glimpse into the world of Micro-Frontends and the enabling power of Module Federation. We embark on a journey to understand these concepts, exploring their applications and advantages. Through real-world scenarios, we uncover how Module Federation revolutionizes collaboration and code-sharing, ushering in a new era of web development.

## What Are Micro-Frontends?

Imagine building a large web application with various features, each managed by different teams or developers. Micro-Frontends, similar in concept to microservices for backend development, are an architectural approach that breaks down this monolithic application into smaller, self-contained pieces, called micro-frontends. Each micro-frontend is responsible for a specific part of the application's user interface or functionality. These micro-frontends can be developed, deployed, and maintained independently, allowing multiple teams to work simultaneously without interfering with each other.

Micro-frontends can be implemented using various techniques and approaches. Here's a brief overview of some of these techniques:

1. **Client-Side Composition:**
   - **IFrames:** Each micro-frontend is like a mini-website loaded into a special frame within the main app. Communication can be tricky due to browser security.
   - **Web Components:** Micro-frontends are made as building blocks called Web Components. They bundle HTML, CSS, and JavaScript and can be added to the main app. They talk to each other using special events or a shared data manager.
2. **Server-Side Composition:**
   - **Server-Side Includes (SSI):** The main server puts together the whole webpage by taking pieces from various micro-frontends during page creation.
   - **Edge Side Includes (ESI):** Similar to SSI, but done by edge servers, often used in content delivery networks (CDNs).
3. **JavaScript Module Federation:**
   - **Module Federation:** This is a modern way. Micro-frontends are like separate apps that can be loaded by the main app when needed. They share specific parts (modules) with each other, like Lego pieces you can connect and use in different places.

## Exploring Module Federation

Module Federation is commonly used in micro-frontends, where different teams or development groups are responsible for various parts of a web application, and it allows them to work independently while still integrating their components into a cohesive whole.

Module Federation is a technology initially introduced in Webpack 5, primarily used to share code between different JavaScript applications. It enables dynamic loading of code from a remote application at runtime, making it a powerful tool for building a micro-frontend architecture.

### How Does Module Federation Work

Module Federation works by exposing a set of modules from one application and consuming them in another application. The application that exposes the modules is called the **host application**, and the application that consumes the modules is called the **remote application**. TThe host application configures which modules it wants to share, and the remote application configures which modules it wants to consume. This configuration is done using the Module Federation plugin.

### Benefits of Using Module Federation

Let's consider a real-world scenario. I've been working on a project that involves creating both a web app and a Figma plugin. Both projects use React and Vite. Initially, we faced a challenge: we needed to use the same components in both projects to maintain a consistent appearance and functionality. Manually copying code between the projects was tedious and error-prone.

To address this, we turned to Module Federation. This technology allowed us to effortlessly share and use components between our projects. By eliminating manual copying, Module Federation ensured that any changes to shared components were automatically reflected in both the web app and the Figma plugin.

## An Example of Module Federation

> The code for this example can be found in the [module-federation-example](https://github.com/Codingiri/module-federation) repository.

Let's illustrate Module Federation with a simple example. We have two projects created with Vite and React: one serves as the host, and the other as the remote. In this scenario, we want to share a "HelloWorld" component from the remote project with the host. The host application consumes this component and can pass props to it.

- Remote App exposes the "HelloWorld" component:

```js
// remote-app/vite.config.js
federation({
  name: "remote-app",
  filename: "remoteEntry.js",
  exposes: {
    "./HelloWorld": "./src/components/HelloWorld.jsx",
  },
  shared: ["react"],
});
```

- Host App consumes the "HelloWorld" component:

```js
// host-app/vite.config.js
federation({
  name: "host-app",
  remotes: {
    "remote-app": "http://localhost:3000/assets/remoteEntry.js",
  },
  shared: ["react"],
});
```

## Conclusion

Module Federation and Micro-Frontends offer powerful solutions for building scalable web applications with independent, collaborative development teams. Module Federation simplifies the sharing of code between applications, reducing duplication and ensuring consistency. Meanwhile, Micro-Frontends enable teams to work autonomously on specific features, promoting agility and faster development. These concepts, when employed effectively, can streamline development and improve the maintainability of complex web projects.
