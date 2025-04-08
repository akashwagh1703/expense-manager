// Add filter for listing with category and date

import React, { useState } from "react";
import {
    FaPlusCircle,
    FaDollarSign,
    FaClipboardList,
    FaArrowLeft,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import 'animate.css';

const AddExpenseIncomePage = () => {
    const [transactionType, setTransactionType] = useState("expense");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [transactions, setTransactions] = useState([]);
    const [filterCategory, setFilterCategory] = useState("");
    const [filterDate, setFilterDate] = useState(""); // Later we can add date to transaction

    const navigate = useNavigate();

    // Sample categories (replace with dynamic data later)
    const categories = [
        "Seeds",
        "Fertilizers",
        "Labor",
        "Equipment",
        "Sales",
        "Other",
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount && description && category) {
            const newTransaction = {
                id: Date.now(),
                type: transactionType,
                amount: parseFloat(amount),
                description,
                category,
                date: new Date().toISOString().split("T")[0], // "YYYY-MM-DD"
            };
            setTransactions([newTransaction, ...transactions]);
            setAmount("");
            setDescription("");
            setCategory("");
            alert("Transaction added successfully!");
        } else {
            alert("Please fill in all fields.");
        }
    };

    const hasExpenses = transactions.some((tx) => tx.type === "expense");
    const hasIncome = transactions.some((tx) => tx.type === "income");

    return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className={`${!transactions.length ? 'col-lg-8' : 'col-lg-6'} mb-4`}>
                    <div className="d-flex align-items-center mb-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="btn btn-outline-primary rounded-circle p-3 shadow-sm border-0"
                        >
                            <FaArrowLeft size={20} />
                        </button>
                        <h2 className="ms-3 flex-grow-1 text-center text-muted fs-3 mb-0">
                            Add {transactionType === "expense" ? "Expense" : "Income"}
                        </h2>
                    </div>

                    {/* Tab Buttons */}
                    <div className="d-flex justify-content-center mb-4">
                        <button
                            className={`btn me-2 px-4 py-2 rounded-pill shadow-sm ${transactionType === "expense"
                                ? "btn-danger text-white"
                                : "btn-outline-danger"
                                }`}
                            onClick={() => setTransactionType("expense")}
                        >
                            Expense
                        </button>
                        <button
                            className={`btn px-4 py-2 rounded-pill shadow-sm ${transactionType === "income"
                                ? "btn-success text-white"
                                : "btn-outline-success"
                                }`}
                            onClick={() => setTransactionType("income")}
                        >
                            Income
                        </button>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="card p-4 shadow-lg border-0 rounded-3 bg-light animate__animated animate__fadeIn"
                    >
                        <div className="mb-3">
                            <label htmlFor="amount" className="form-label text-muted">
                                <strong>Amount</strong>
                            </label>
                            <div className="input-group input-group-lg">
                                <span className="input-group-text bg-primary text-white">
                                    <FaDollarSign />
                                </span>
                                <input
                                    type="number"
                                    id="amount"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="form-control shadow-sm border-0"
                                    placeholder="Enter amount"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="category" className="form-label text-muted">
                                <strong>Category</strong>
                            </label>
                            <select
                                id="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="form-select shadow-sm border-0"
                                required
                            >
                                <option value="">-- Select Category --</option>
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="description" className="form-label text-muted">
                                <strong>Description</strong>
                            </label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="form-control shadow-sm border-0"
                                rows="3"
                                placeholder="Enter description"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-100 py-2 mt-3 shadow-sm rounded-pill text-white"
                        >
                            <FaPlusCircle className="me-2" />
                            Add {transactionType === "expense" ? "Expense" : "Income"}
                        </button>
                    </form>
                </div>

                {/* Transaction Columns */}
                {transactions.length > 0 && (
                    <div className="col-lg-6">
                        <div className="row">
                            {/* Expenses */}
                            {hasExpenses && (
                                <div className="col-md-6 mb-4 animate__animated animate__slideInLeft">
                                    <h4 className="text-center text-danger mb-3">Expenses</h4>
                                    <div className="d-flex flex-column gap-3">
                                        {transactions
                                            .filter((tx) => tx.type === "expense")
                                            .map((transaction) => (
                                                <div
                                                    key={transaction.id}
                                                    className="card shadow-sm border-0 bg-light animate__animated animate__fadeInUp"
                                                >
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between align-items-start">
                                                            <div>
                                                                <div className="fw-bold fs-5 text-dark">
                                                                    ₹{transaction.amount}
                                                                </div>
                                                                <div className="text-muted small">
                                                                    {transaction.description}
                                                                </div>
                                                                <div className="badge bg-secondary mt-2">
                                                                    {transaction.category}
                                                                </div>
                                                            </div>
                                                            <span className="badge bg-danger text-white rounded-pill px-3 py-2">
                                                                Expense
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            )}

                            {/* Income */}
                            {hasIncome && (
                                <div className="col-md-6 mb-4 animate__animated animate__slideInRight">
                                    <h4 className="text-center text-success mb-3">Income</h4>
                                    <div className="d-flex flex-column gap-3">
                                        {transactions
                                            .filter((tx) => tx.type === "income")
                                            .map((transaction) => (
                                                <div
                                                    key={transaction.id}
                                                    className="card shadow-sm border-0 bg-light animate__animated animate__fadeInUp"
                                                >
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between align-items-start">
                                                            <div>
                                                                <div className="fw-bold fs-5 text-dark">
                                                                    ₹{transaction.amount}
                                                                </div>
                                                                <div className="text-muted small">
                                                                    {transaction.description}
                                                                </div>
                                                                <div className="badge bg-secondary mt-2">
                                                                    {transaction.category}
                                                                </div>
                                                            </div>
                                                            <span className="badge bg-success text-white rounded-pill px-3 py-2">
                                                                Income
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddExpenseIncomePage;
