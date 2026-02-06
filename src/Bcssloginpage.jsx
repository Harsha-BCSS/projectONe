import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Login submitted:', { username, password });
    };

    return (
        <div style={{
            backgroundColor: "#1e3a8a",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            padding: "20px"
        }}>
            <div style={{
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                padding: "40px",
                width: "100%",
                maxWidth: "450px"
            }}>
                {/* Logo Section */}
                <div style={{ textAlign: "center", marginBottom: "30px" }}>
                    <img
                        src='https://www.bluecloudsoftech.com/wp-content/uploads/2026/01/cropped-Logo-1-1.png'
                        alt="BCSS Logo"
                        style={{
                            height: "50px",
                            backgroundColor: "#1e3a8a",
                            width: "auto",
                            marginBottom: "20px"
                        }}
                    />
                    <h2 style={{
                        color: "#1e3a8a",
                        fontSize: "28px",
                        fontWeight: "600",
                        margin: "0 0 10px 0"
                    }}>Welcome Back!</h2>
                    <p style={{
                        color: "#64748b",
                        fontSize: "16px",
                        margin: "0"
                    }}>Please login to your account</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit}>
                    {/* Username Field */}
                    <div style={{ marginBottom: "20px" }}>
                        <label style={{
                            display: "block",
                            color: "#334155",
                            fontSize: "14px",
                            fontWeight: "500",
                            marginBottom: "8px"
                        }}>
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            required
                            style={{
                                width: "100%",
                                padding: "12px 16px",
                                fontSize: "16px",
                                border: "2px solid #e2e8f0",
                                borderRadius: "8px",
                                outline: "none",
                                transition: "all 0.3s ease",
                                boxSizing: "border-box"
                            }}
                            onFocus={(e) => e.target.style.borderColor = "#1e3a8a"}
                            onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                        />
                    </div>

                    {/* Password Field */}
                    <div style={{ marginBottom: "24px" }}>
                        <label style={{
                            display: "block",
                            color: "#334155",
                            fontSize: "14px",
                            fontWeight: "500",
                            marginBottom: "8px"
                        }}>
                            Password
                        </label>
                        <div style={{ position: "relative" }}>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                                style={{
                                    width: "100%",
                                    padding: "12px 16px",
                                    fontSize: "16px",
                                    border: "2px solid #e2e8f0",
                                    borderRadius: "8px",
                                    outline: "none",
                                    transition: "all 0.3s ease",
                                    boxSizing: "border-box",
                                    paddingRight: "45px"
                                }}
                                onFocus={(e) => e.target.style.borderColor = "#1e3a8a"}
                                onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    position: "absolute",
                                    right: "12px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: "14px",
                                    color: "#64748b",
                                    padding: "4px 8px"
                                }}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "14px",
                            backgroundColor: "#1e3a8a",
                            color: "white",
                            fontSize: "16px",
                            fontWeight: "600",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            marginBottom: "16px"
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = "#1e40af"}
                        onMouseLeave={(e) => e.target.style.backgroundColor = "#1e3a8a"}
                    >
                        Login
                    </button>

                    {/* Forgot Password Link */}
                    <div style={{ textAlign: "center" }}>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                console.log('Forgot password clicked');
                            }}
                            style={{
                                color: "#1e3a8a",
                                fontSize: "14px",
                                textDecoration: "none",
                                fontWeight: "500",
                                transition: "color 0.3s ease"
                            }}
                            onMouseEnter={(e) => e.target.style.color = "#1e40af"}
                            onMouseLeave={(e) => e.target.style.color = "#1e3a8a"}
                        >
                            Forgot Password?
                        </a>
                    </div>
                </form>

                {/* Divider */}
                <div style={{
                    margin: "30px 0",
                    textAlign: "center",
                    position: "relative"
                }}>
                    <div style={{
                        position: "absolute",
                        top: "50%",
                        left: "0",
                        right: "0",
                        height: "1px",
                        backgroundColor: "#e2e8f0"
                    }}></div>
                    <span style={{
                        position: "relative",
                        backgroundColor: "white",
                        padding: "0 15px",
                        color: "#94a3b8",
                        fontSize: "14px"
                    }}>
                        or
                    </span>
                </div>

                {/* Sign Up Link */}
                <div style={{ textAlign: "center" }}>
                    <p style={{
                        color: "#64748b",
                        fontSize: "14px",
                        margin: "0"
                    }}>
                        Don't have an account?{' '}
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                console.log('Sign up clicked');
                            }}
                            style={{
                                color: "#1e3a8a",
                                fontWeight: "600",
                                textDecoration: "none"
                            }}
                            onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
                            onMouseLeave={(e) => e.target.style.textDecoration = "none"}
                        >
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;