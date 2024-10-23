# CherryGlitz

![Platform](https://img.shields.io/badge/Platform-Mobile%20First-brightgreen)
![Framework](https://img.shields.io/badge/Framework-Next.js-blue)
![Database](https://img.shields.io/badge/Database-MongoDB-green)
![Storage](https://img.shields.io/badge/Storage-AWS%20S3-yellow)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

> **CherryGlitz** is a cutting-edge platform for over 1 million shops related to tattoo parlors, massage, spas, parlors, and men's salons. Built using **Next.js**, **MongoDB**, and **AWS S3**, the platform is designed with a focus on scalability, performance, and a seamless mobile-first experience. 

## 🚀 Key Features

- **Scalable Platform**: Supports onboarding of over 1 million shops.
- **Efficient Data Handling**: Uses MongoDB aggregation and horizontal scaling to manage large volumes of data.
- **Cloud Storage**: AWS S3 is used for storing shop assets such as images and documents.
- **User Authentication**: Firebase authentication integrated for secure user management.
- **Seamless Payment Processing**: Razorpay integration for secure payments.
- **CMS System**: Custom Content Management System (CMS) for shop management.
- **Mobile-First Design**: Optimized for smartphones with responsive UI/UX.

## 🎯 Technologies Used

- **Front-End**: 
  - [Next.js](https://nextjs.org) - React-based framework for server-side rendering and optimized performance.
  - [Tailwind CSS](https://tailwindcss.com) - For responsive and utility-first styling.
  
- **Back-End**:
  - [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) for seamless API management.
  - [MongoDB](https://www.mongodb.com) - NoSQL database for storing shop and user data.
  
- **Cloud Storage**:
  - [AWS S3](https://aws.amazon.com/s3/) for shop asset storage (images, documents, etc.).
  
- **Authentication**:
  - [Firebase Authentication](https://firebase.google.com/docs/auth) for secure user login and registration.
  
- **Payments**:
  - [Razorpay](https://razorpay.com) for payment gateway integration.

## 💡 Next.js Features for Performance Optimization

To boost performance and enhance the user experience, **Next.js** features such as **Server-Side Rendering (SSR)**, **Static Generation (SSG)**, and **Automatic Image Optimization** were implemented. Below is a breakdown of the key features used:

### ⚡ Server-Side Rendering (SSR)
- **Benefit**: SSR enables pages to be pre-rendered on the server, providing faster initial page load times and better SEO.
- **Usage**: Dynamic pages are rendered on the server during each request to deliver up-to-date content quickly.

### 🖼 Image Optimization
- **Benefit**: Images are automatically optimized for the web, reducing file sizes and improving loading speed without sacrificing quality.
- **Usage**: Images are resized based on the device's screen size, and modern formats like WebP are used when supported.

### 📈 Static Generation (SSG)
- **Benefit**: Pages are pre-rendered at build time and served as static assets, improving speed and performance.
- **Usage**: Used for frequently accessed, mostly static content.

### 🧭 Automatic Code Splitting
- **Benefit**: Next.js automatically splits code at the page level, reducing the JavaScript bundle size.
- **Usage**: Only the necessary JavaScript is loaded on each page, leading to faster navigation and loading times.

### 🛣 Routing
- **Benefit**: File-based routing simplifies the creation of pages and APIs.
- **Usage**: Easy-to-manage routes allow for intuitive navigation across the platform.

### 📊 SEO Optimization
- **Benefit**: Improved search engine visibility through optimized meta tags, SSR, and structured data.
- **Usage**: Meta tags and content are dynamically generated to enhance the platform's search engine performance.

## 🏗 Database Design

CherryGlitz uses **MongoDB** to store data related to shops, services, users, and transactions. MongoDB's **Aggregation Pipelines** and **Horizontal Scaling** are employed to manage large datasets effectively. 

- **Aggregation Pipelines**: Efficient filtering and data transformations for complex queries.
- **Horizontal Scaling**: Distributes data across multiple servers to handle large volumes of entries, ensuring faster data retrieval and performance.

## 🔑 Authentication

**Firebase Authentication** ensures secure user management. Users can register and log in using email or phone numbers, with OTP verification for added security. This flexible system ensures smooth user experience across platforms.

## 💾 Storage

CherryGlitz utilizes **AWS S3** for storing shop-related assets like images and documents. This cloud-based storage ensures:
- **Scalability**: Ability to handle millions of assets.
- **Security**: S3’s encryption and permission settings keep data secure.
- **Performance**: Fast and reliable content delivery.

## 💳 Payment Integration

The platform integrates **Razorpay** to securely manage payments between customers and service providers. Features include:
- **Online Payments**: Supports various payment methods like credit cards, UPI, and wallets.
- **Secure Transactions**: PCI DSS compliance ensures a secure payment process.

## 🛠 CMS System

CherryGlitz comes with a built-in **Content Management System (CMS)** for shop owners. With the CMS, owners can:
- Add/Edit services and products
- Manage customer bookings and schedules
- Track payment transactions and customer history

## 📱 Mobile-First Design

The platform is built with a **Mobile-First Approach** to ensure an optimized experience for mobile users. The responsive UI adapts seamlessly to different screen sizes, providing an excellent user experience on smartphones.

