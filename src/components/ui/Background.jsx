const Background = ({ children }) => {
    return (
        <div>
            <div className="min-h-screen w-full bg-black relative">
                {/* Dark White Dotted Grid Background */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "#000000",
                        backgroundImage: `
            radial-gradient(circle, rgba(139,92,246,0.6) 1px, transparent 1px),
            radial-gradient(circle, rgba(59,130,246,0.4) 1px, transparent 1px),
            radial-gradient(circle, rgba(236,72,153,0.5) 1px, transparent 1px)
            `,
                        backgroundSize: "20px 20px, 40px 40px, 60px 60px",
                        backgroundPosition: "0 0, 10px 10px, 30px 30px",
                    }}
                />
                {children}
            </div>
        </div>
    );
};

export default Background;

