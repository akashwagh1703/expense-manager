import React, { useState } from "react";
import { FaUser, FaBell, FaSlidersH, FaPalette, FaLock, FaLanguage, FaCloudSun, FaTractor } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

const FarmerSettingsPage = () => {
    const [activeTab, setActiveTab] = useState("profile");
    const [settings, setSettings] = useState({
        name: "Ramesh Yadav",
        phone: "9876543210",
        village: "Shivpura",
        language: "Hindi",
        theme: "Light",
        smsNotifications: true,
        appNotifications: true,
        darkMode: false,
        password: "",
        cropType: "Wheat",
        farmSize: "2 acres",
        weatherAlerts: true,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSave = () => {
        alert("Settings saved!");
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case "profile":
                return (
                    <>
                        <h5 className="mb-3">👤 Profile Information</h5>
                        <Input label="Name" name="name" value={settings.name} onChange={handleChange} />
                        <Input label="Phone" name="phone" value={settings.phone} onChange={handleChange} />
                        <Input label="Village" name="village" value={settings.village} onChange={handleChange} />
                        <Input label="Password" name="password" value={settings.password} onChange={handleChange} type="password" />
                    </>
                );
            case "preferences":
                return (
                    <>
                        <h5 className="mb-3">⚙️ Preferences</h5>
                        <Select label="Language" name="language" value={settings.language} onChange={handleChange} options={["Hindi", "English", "Marathi"]} />
                        <Select label="Theme" name="theme" value={settings.theme} onChange={handleChange} options={["Light", "Dark"]} />
                        <Switch label="Enable Dark Mode" name="darkMode" checked={settings.darkMode} onChange={handleChange} />
                        <Input label="Farm Size" name="farmSize" value={settings.farmSize} onChange={handleChange} />
                        <Input label="Crop Type" name="cropType" value={settings.cropType} onChange={handleChange} />
                    </>
                );
            case "notifications":
                return (
                    <>
                        <h5 className="mb-3">🔔 Notification Settings</h5>
                        <Switch label="SMS Notifications" name="smsNotifications" checked={settings.smsNotifications} onChange={handleChange} />
                        <Switch label="App Notifications" name="appNotifications" checked={settings.appNotifications} onChange={handleChange} />
                        <Switch label="Weather Alerts" name="weatherAlerts" checked={settings.weatherAlerts} onChange={handleChange} />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="container p-3">
            <div className="text-center mb-4">
                <h2 className="fw-bold text-success">🌾 Farmer Settings</h2>
                <p className="text-muted">Customize your experience and stay updated with latest farming tools</p>
            </div>

            <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
                <TabButton icon={<FaUser />} label="Profile" active={activeTab === "profile"} onClick={() => setActiveTab("profile")} />
                <TabButton icon={<FaSlidersH />} label="Preferences" active={activeTab === "preferences"} onClick={() => setActiveTab("preferences")} />
                <TabButton icon={<FaBell />} label="Notifications" active={activeTab === "notifications"} onClick={() => setActiveTab("notifications")} />
            </div>

            <div className="card shadow-lg p-4 animate__animated animate__fadeIn rounded-4 border-0 bg-light">
                {renderTabContent()}
                <button className="btn btn-success mt-4 w-100 rounded-pill fw-bold py-2">Save Settings</button>
            </div>
        </div>
    );
};

const TabButton = ({ icon, label, active, onClick }) => (
    <button
        className={`btn px-4 py-2 rounded-pill fw-semibold shadow-sm ${active ? "btn-success text-white" : "btn-outline-success"}`}
        onClick={onClick}
    >
        {icon} <span className="ms-2">{label}</span>
    </button>
);

const Input = ({ label, name, value, onChange, type = "text" }) => (
    <div className="mb-3">
        <label className="form-label fw-semibold">{label}</label>
        <input
            type={type}
            className="form-control shadow-sm rounded-3"
            name={name}
            value={value}
            onChange={onChange}
        />
    </div>
);

const Select = ({ label, name, value, onChange, options }) => (
    <div className="mb-3">
        <label className="form-label fw-semibold">{label}</label>
        <select
            className="form-select shadow-sm rounded-3"
            name={name}
            value={value}
            onChange={onChange}
        >
            {options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
            ))}
        </select>
    </div>
);

const Switch = ({ label, name, checked, onChange }) => (
    <div className="form-check form-switch mb-3">
        <input
            className="form-check-input"
            type="checkbox"
            name={name}
            checked={checked}
            onChange={onChange}
        />
        <label className="form-check-label fw-semibold ms-2">{label}</label>
    </div>
);

export default FarmerSettingsPage;