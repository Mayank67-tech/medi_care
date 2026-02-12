import axios from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';

const jar = new CookieJar();
const client = wrapper(axios.create({ jar, withCredentials: true, baseURL: 'http://localhost:8004/api' }));

const testAuth = async () => {
    try {
        console.log("1. Testing Health Check...");
        try {
            await axios.get('http://localhost:8004/');
            console.log("   Server is running.");
        } catch (e) {
            console.error("   Server is NOT running. Please start the server.");
            return;
        }

        const email = `test_${Date.now()}@example.com`;
        const password = 'password123';
        const name = 'Test User';

        console.log(`\n2. Registering User (${email})...`);
        const regRes = await client.post('/user/register', { name, email, password });
        console.log("   Response:", regRes.data);
        if (!regRes.data.success) throw new Error("Registration failed");

        console.log("\n3. Logging in...");
        const loginRes = await client.post('/user/login', { email, password });
        console.log("   Response:", loginRes.data);
        if (!loginRes.data.success) throw new Error("Login failed");

        console.log("\n4. Accessing Protected Route (Get Profile)...");
        // We need userId for getProfile according to the controller implementation?
        // Let's check userController.js: const { userId } = req.body; 
        // But the middleware sets req.body.userId = tokendecode.id
        // So we don't need to send it if the middleware works.
        const profileRes = await client.get('/user/get-profile');
        // wrapper might not handle GET with body well if the controller expects it in body.
        // Wait, getProfile is a GET request usually, but let's check route.
        // UserRoute: userRouter.get('/get-profile',authUser,getProfile)
        // Controller: const { userId } = req.body;
        // In GET requests, bodies are unconventional. But express might parse it if sent?
        // Middleware adds it to req.body. So if it's GET, req.body might be empty initially but middleware populates it.
        console.log("   Response:", profileRes.data);
        if (!profileRes.data.success) throw new Error("Get Profile failed");

        console.log("\n5. Logging out...");
        const logoutRes = await client.post('/user/logout'); // Assuming I made it POST? Check route.
        // I likely didn't add the route for logout yet!
        console.log("   Response:", logoutRes.data);

        console.log("\n6. Accessing Protected Route after Logout...");
        const profileRes2 = await client.get('/user/get-profile');
        console.log("   Response:", profileRes2.data);
        if (profileRes2.data.success) throw new Error("Should have failed after logout");
        else console.log("   Correctly failed access.");

    } catch (error) {
        console.error("Test Failed:", error.message);
        if (error.response) console.error("Data:", error.response.data);
    }
};

testAuth();
