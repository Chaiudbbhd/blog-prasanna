
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';


const Blog = () => {
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Microservices with Spring Boot",
      excerpt: "Learn how to design and implement a robust microservices architecture using Spring Boot, with practical examples and best practices.",
      category: "Spring Boot",
      readTime: "8 min read",
      date: "Dec 10, 2024",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      featured: true
    },
    {
      id: 2,
      title: "React State Management: From useState to Redux",
      excerpt: "A comprehensive guide to state management in React applications, covering hooks, context API, and Redux with real-world examples.",
      category: "React",
      readTime: "12 min read",
      date: "Dec 5, 2024",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      featured: true
    },
    {
      id: 3,
      title: "Database Optimization Techniques for Java Applications",
      excerpt: "Explore advanced database optimization strategies including indexing, query optimization, and connection pooling for better performance.",
      category: "Database",
      readTime: "10 min read",
      date: "Nov 28, 2024",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      featured: false
    },
    {
      id: 4,
      title: "Implementing JWT Authentication in Spring Security",
      excerpt: "Step-by-step guide to implementing secure authentication using JWT tokens with Spring Security and best security practices.",
      category: "Security",
      readTime: "15 min read",
      date: "Nov 20, 2024",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      featured: false
    },
    {
      id: 5,
      title: "Docker Containerization for Java Applications",
      excerpt: "Learn how to containerize your Java applications with Docker, including multi-stage builds and optimization techniques.",
      category: "DevOps",
      readTime: "7 min read",
      date: "Nov 15, 2024",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b",
      featured: false
    },
    {
      id: 6,
      title: "Testing Strategies for Spring Boot Applications",
      excerpt: "Comprehensive testing approaches including unit tests, integration tests, and test containers for robust application development.",
      category: "Testing",
      readTime: "11 min read",
      date: "Nov 10, 2024",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      featured: false
    }
  ];

  const categories = ["All", "Spring Boot", "React", "Database", "Security", "DevOps", "Testing"];
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 bg-muted/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Blog
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing insights, tutorials, and experiences from my journey in full-stack development.
          </p>
        </div>

        {/* Category Filter */}
         

        {/* Featured Posts */}
        {selectedPostId === 1 && (
  <div className="mt-12 max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
    <h2 className="text-2xl font-bold mb-4">Building Scalable Microservices with Spring Boot</h2>
    <p className="text-muted-foreground mb-6">
      Learn how to design and implement a robust microservices architecture using Spring Boot, with practical examples and best practices.
    </p>

    <h3 className="text-lg font-semibold mb-2">🔍 Introduction</h3>
    <p className="mb-4">
      As applications grow in complexity and user demand, monolithic architectures often become bottlenecks. Microservices architecture has emerged as a powerful solution — enabling scalability, agility, and rapid deployment. In this article, we'll explore how to build scalable microservices using Spring Boot, one of the most popular frameworks in the Java ecosystem.
    </p>

    <h3 className="text-lg font-semibold mb-2">🧱 What Are Microservices?</h3>
    <p className="mb-2">Microservices are an architectural style that structures an application as a collection of independent services, each responsible for a specific business capability.</p>
    <ul className="list-disc pl-6 mb-4">
      <li>Independently deployable components</li>
      <li>Decentralized data management</li>
      <li>Technology-agnostic communication</li>
      <li>Scalability at service level</li>
    </ul>

    <h3 className="text-lg font-semibold mb-2">⚙️ Why Spring Boot for Microservices?</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>Embedded servers (like Tomcat)</li>
      <li>Auto-configuration</li>
      <li>RESTful APIs with Spring MVC</li>
      <li>Easy integration with Spring Cloud</li>
    </ul>

    <h3 className="text-lg font-semibold mb-2">🏗️ Setting Up a Microservice with Spring Boot</h3>
    <p className="mb-2">Here’s a basic outline to create a scalable microservice.</p>
    <h4 className="font-semibold">📦 Step 1: Create a Spring Boot Project</h4>
    <p className="mb-2">Use Spring Initializr or your IDE with dependencies like Spring Web, Spring Data JPA, Spring Security, Eureka Client, etc.</p>

    <h4 className="font-semibold">💻 Step 2: Build a Simple Microservice</h4>
    <pre className="bg-gray-100 p-4 rounded mb-4 overflow-auto text-sm">
{`@RestController
@RequestMapping("/products")
public class ProductController {
    
    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getProducts();
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return productService.save(product);
    }
}`}
    </pre>

    <h4 className="font-semibold">🗂️ Step 3: Service Discovery with Eureka</h4>
    <p className="mb-2">Add the Eureka client dependency and annotate your main class:</p>
    <pre className="bg-gray-100 p-4 rounded mb-4 overflow-auto text-sm">
{`@SpringBootApplication
@EnableEurekaClient
public class ProductServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(ProductServiceApplication.class, args);
    }
}`}
    </pre>

    <h4 className="font-semibold">🌐 Step 4: API Gateway</h4>
    <pre className="bg-gray-100 p-4 rounded mb-4 overflow-auto text-sm">
{`spring:
  cloud:
    gateway:
      routes:
        - id: product-service
          uri: lb://PRODUCT-SERVICE
          predicates:
            - Path=/products/**`}
    </pre>

    <h3 className="text-lg font-semibold mb-2">🚀 Scaling Microservices</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>Use Docker and Kubernetes</li>
      <li>Auto-scale with cloud providers</li>
      <li>Implement Circuit Breakers (Resilience4j)</li>
    </ul>

    <h3 className="text-lg font-semibold mb-2">🛡️ Best Practices</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>Design for failure – retries, circuit breakers</li>
      <li>Don’t share DBs</li>
      <li>Use DTOs and log centrally</li>
      <li>Secure APIs with JWT/OAuth2</li>
    </ul>

    <h3 className="text-lg font-semibold mb-2">📈 Real-World Use Case</h3>
    <p className="mb-4">
      An e-commerce platform could split into User Service, Product Catalog, Order Management, Payment Service, and Notification Service — each scaled and deployed independently.
    </p>

    <h3 className="text-lg font-semibold mb-2">🧪 Testing & Tooling</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>JUnit, Mockito, SpringBootTest</li>
      <li>Pact for contract testing</li>
      <li>Postman / REST Assured for API tests</li>
    </ul>

    <h3 className="text-lg font-semibold mb-2">🏁 Conclusion</h3>
    <p>
      Spring Boot provides a powerful and developer-friendly way to build microservices that are production-ready, scalable, and easy to maintain.
    </p>
  </div>
)}

{selectedPostId === 2 && (
  <div className="mt-12 max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
    <h2 className="text-2xl font-bold mb-4">React State Management: From useState to Redux</h2>
    <p className="text-muted-foreground mb-6">
      A comprehensive guide to state management in React applications, covering hooks, Context API, and Redux with real-world examples.
    </p>

    <h3 className="text-lg font-semibold mb-2">📌 Introduction</h3>
    <p className="mb-4">
      In modern web development, managing state efficiently is crucial — especially as applications grow in complexity. React, by default, offers powerful tools like useState and useReducer. But as your component tree deepens, lifting state up becomes messy. This is where tools like Context API and Redux step in.
    </p>

    <h3 className="text-lg font-semibold mb-2">🧠 What is State in React?</h3>
    <p className="mb-4">
      State is a built-in object that stores property values that belong to a component. When the state changes, React re-renders the component to reflect the new values.
    </p>

    <h3 className="text-lg font-semibold mb-2">🛠️ 1. useState: For Local Component State</h3>
    <p className="mb-2">Best for simple UI interactions like form input, toggles, or modal visibility.</p>
    <pre className="bg-gray-100 p-4 rounded mb-4 text-sm overflow-auto">
{`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}`}
    </pre>

    <h4 className="font-semibold mb-2">🧩 Perfect when:</h4>
    <ul className="list-disc pl-6 mb-4">
      <li>State is used in only one component</li>
      <li>No need to share across tree</li>
    </ul>

    <h3 className="text-lg font-semibold mb-2">⚙️ 2. useReducer: For Complex Local Logic</h3>
    <p className="mb-2">An alternative to useState when logic depends on previous state:</p>
    <pre className="bg-gray-100 p-4 rounded mb-4 text-sm overflow-auto">
{`const reducer = (state, action) => {
  switch(action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  
  return (
    <div>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}`}
    </pre>

    <h3 className="text-lg font-semibold mb-2">🌐 3. Context API: For Shared App-Wide State</h3>
    <pre className="bg-gray-100 p-4 rounded mb-4 text-sm overflow-auto">
{`const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Page />
    </ThemeContext.Provider>
  );
}

function Page() {
  const theme = useContext(ThemeContext);
  return <div className={theme}>Hello World</div>;
}`}
    </pre>
    <p className="mb-4">
      👍 Best for: Themes, Auth tokens, Global UI state (sidebar toggle, language, etc.)
    </p>
    <p className="mb-4">
      🚫 Not ideal for high-frequency updates like counters, dynamic lists, etc.
    </p>

    <h3 className="text-lg font-semibold mb-2">⚛️ 4. Redux: For Advanced Global State Management</h3>
    <p className="mb-2">Redux is ideal for:</p>
    <ul className="list-disc pl-6 mb-4">
      <li>Multiple shared state slices</li>
      <li>Complex updates</li>
      <li>DevTools for time-travel debugging</li>
    </ul>

    <h4 className="font-semibold mb-2">🔧 Setup Example</h4>
    <pre className="bg-gray-100 p-4 rounded mb-4 text-sm overflow-auto">
{`npm install redux react-redux @reduxjs/toolkit`}
    </pre>

    <h4 className="font-semibold mb-2">Create a Slice:</h4>
    <pre className="bg-gray-100 p-4 rounded mb-4 text-sm overflow-auto">
{`import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1 },
    decrement: state => { state.value -= 1 }
  }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;`}
    </pre>

    <h4 className="font-semibold mb-2">Configure Store:</h4>
    <pre className="bg-gray-100 p-4 rounded mb-4 text-sm overflow-auto">
{`import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});`}
    </pre>

    <h4 className="font-semibold mb-2">Use in App:</h4>
    <pre className="bg-gray-100 p-4 rounded mb-4 text-sm overflow-auto">
{`import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './store';
import { increment, decrement } from './store/counterSlice';

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  
  return (
    <>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}`}
    </pre>

    <h3 className="text-lg font-semibold mb-2">🧠 When to Use What?</h3>
    <table className="w-full mb-4 text-sm">
      <thead className="font-semibold bg-gray-100">
        <tr><td className="p-2">Use Case</td><td className="p-2">Recommended Tool</td></tr>
      </thead>
      <tbody>
        <tr><td className="p-2">Simple, local state</td><td className="p-2">useState</td></tr>
        <tr><td className="p-2">Complex logic within a component</td><td className="p-2">useReducer</td></tr>
        <tr><td className="p-2">Shared state between siblings</td><td className="p-2">Context API</td></tr>
        <tr><td className="p-2">Complex shared state across modules</td><td className="p-2">Redux or Zustand</td></tr>
        <tr><td className="p-2">Need for debugging & middleware</td><td className="p-2">Redux</td></tr>
      </tbody>
    </table>

    <h3 className="text-lg font-semibold mb-2">🚀 Alternatives to Redux</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>Zustand</li>
      <li>Jotai</li>
      <li>Recoil</li>
      <li>XState (for state machines)</li>
    </ul>

    <h3 className="text-lg font-semibold mb-2">🧪 Testing State</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>React Testing Library for component behavior</li>
      <li>Jest for actions/reducers in Redux</li>
      <li>MSW to mock server calls in async state</li>
    </ul>

    <h3 className="text-lg font-semibold mb-2">🧵 Final Thoughts</h3>
    <p className="mb-4">
      React gives you the freedom to choose the right tool for state management. Begin with useState, then grow into Context or Redux as your app demands.
    </p>
    <blockquote className="italic text-muted-foreground pl-4 border-l-4 border-primary">
      "State management is not about choosing the fanciest tool — it's about choosing the right one for your use case."
    </blockquote>

    <Button variant="secondary" className="mt-6" onClick={() => setSelectedPostId(null)}>
      Back to Blog
    </Button>
  </div>
)}


        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            Featured Articles
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {post.date}
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                <Button
  variant="outline"
  className="group/btn"
  onClick={() => setSelectedPostId(post.id)}
>
  Read More
  <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
</Button>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">Recent Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <Button variant="ghost" size="sm" className="p-0 h-auto font-medium group/btn">
                    Read More
                    <ArrowRight size={14} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
  <Button size="lg" variant="outline" asChild>
    <a href="https://voices-of-java-dev.onrender.com/">
      View All Posts
      <ArrowRight size={20} className="ml-2" />
    </a>
  </Button>
</div>

      </div>
    </section>
  );
};

export default Blog;
