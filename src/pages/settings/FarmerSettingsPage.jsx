import React, { useState, useEffect } from "react";
import { FaUser, FaBell, FaSlidersH } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { useUser } from "../../context/UserContext";

const FarmerSettingsPage = () => {
    const { user } = useUser();
    const [activeTab, setActiveTab] = useState("profile");
    const [settings, setSettings] = useState({
        name: "",
        phone: "",
        village: "",
        language: "",
        theme: "",
        smsNotifications: null,
        appNotifications: null,
        darkMode: null,
        cropType: "",
        farmSize: "",
        weatherAlerts: null,
    });
    const [notification, setNotification] = useState(""); // State for notification message
    const token = localStorage.getItem('token'); // Replace this with the actual token

    // Fetch the settings when the page loads
    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const response = await fetch('http://localhost/expense-manager-api/public/farmer/get-settings', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            if (data.success) {
                const formData = {
                    name: data.data.name,
                    phone: data.data.phone,
                    village: data.data.village,
                    language: data.data.language,
                    theme: data.data.theme,
                    smsNotifications: data.data.sms_notifications,
                    appNotifications: data.data.app_notifications,
                    darkMode: data.data.dark_mode,
                    cropType: data.data.crop_type,
                    farmSize: data.data.farm_size,
                    weatherAlerts: data.data.weather_alerts,
                }
                setSettings(formData);
            }
        } catch (error) {
            console.error('Error fetching settings:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSave = async () => {
        try {
            const response = await fetch('http://localhost/expense-manager-api/public/farmer/save-settings', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(settings),
            });
            const data = await response.json();
            if (data.success) {
                setNotification("Settings saved!"); // Show notification
                setTimeout(() => setNotification(""), 3000); // Hide notification after 3 seconds
            } else {
                setNotification("Failed to save settings!"); // Show failure message
                setTimeout(() => setNotification(""), 3000); // Hide notification after 3 seconds
            }
        } catch (error) {
            console.error('Error saving settings:', error);
            setNotification("Error saving settings!"); // Show error message
            setTimeout(() => setNotification(""), 3000); // Hide notification after 3 seconds
        }
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

            {/* Display Notification */}
            {notification && (
                <div className="alert alert-success" role="alert">
                    {notification}
                </div>
            )}

            <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
                <TabButton icon={<FaUser />} label="Profile" active={activeTab === "profile"} onClick={() => setActiveTab("profile")} />
                <TabButton icon={<FaSlidersH />} label="Preferences" active={activeTab === "preferences"} onClick={() => setActiveTab("preferences")} />
                <TabButton icon={<FaBell />} label="Notifications" active={activeTab === "notifications"} onClick={() => setActiveTab("notifications")} />
            </div>

            <div className="card shadow-lg p-4 animate__animated animate__fadeIn rounded-4 border-0 bg-light">
                {renderTabContent()}
                <button className="btn btn-success mt-4 w-100 rounded-pill fw-bold py-2" onClick={handleSave}>Save Settings</button>
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
