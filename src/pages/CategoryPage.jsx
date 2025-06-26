// if there is  No categories added yet then show add category card in center. when user add below category then animatedly add new one. back button should be correct 
import React, { useState } from "react";
import {
    FaPlus,
    FaEdit,
    FaTrash,
    FaArrowLeft,
    FaClipboardList
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "animate.css";

const CategoryPage = () => {
    const [categoryName, setCategoryName] = useState("");
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!categoryName.trim()) {
            alert("Category name is required.");
            return;
        }

        const newCategory = {
            id: editingId || Date.now(),
            name: categoryName,
            description,
        };

        if (editingId) {
            setCategories(categories.map(cat => cat.id === editingId ? newCategory : cat));
            alert("Category updated!");
        } else {
            setCategories([newCategory, ...categories]);
            alert("Category added!");
        }

        // Reset form
        setCategoryName("");
        setDescription("");
        setEditingId(null);
    };

    const handleEdit = (cat) => {
        setCategoryName(cat.name);
        setDescription(cat.description);
        setEditingId(cat.id);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this category?")) {
            setCategories(categories.filter(cat => cat.id !== id));
        }
    };

    return (
        <div className="container py-4 animate__animated animate__fadeIn">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <button
                    onClick={() => navigate(-1)}
                    className="btn btn-outline-primary rounded-circle p-3 shadow-sm border-0"
                >
                    <FaArrowLeft size={20} />
                </button>
                <h3 className="text-muted text-center flex-grow-1 mb-0">
                    {editingId ? "Edit Category" : "Manage Categories"}
                </h3>
            </div>

            <div className="row g-4">
                {/* Form Section */}
                <div className="col-lg-5">
                    <div className="card shadow-lg border-0 rounded-4 bg-white">
                        <div className="card-body p-4">
                            <h5 className="mb-3 text-primary">
                                {editingId ? "Update Category" : "Add New Category"}
                            </h5>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Category Name</label>
                                    <input
                                        type="text"
                                        value={categoryName}
                                        onChange={(e) => setCategoryName(e.target.value)}
                                        className="form-control"
                                        placeholder="Enter category name"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="form-control"
                                        rows={3}
                                        placeholder="Optional"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 shadow-sm rounded-pill"
                                >
                                    <FaPlus className="me-2" />
                                    {editingId ? "Update" : "Add Category"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* List Section */}
                <div className="col-lg-7">
                    {categories.length > 0 ? (
                        <>
                            <h5 className="mb-3 text-muted">
                                <FaClipboardList className="me-2" />
                                Category List
                            </h5>
                            <div className="d-flex flex-column gap-3">
                                {categories.map((cat) => (
                                    <div
                                        key={cat.id}
                                        className="card border-0 shadow-sm rounded-4 bg-light animate__animated animate__fadeInUp"
                                    >
                                        <div className="card-body d-flex justify-content-between align-items-start">
                                            <div>
                                                <h6 className="mb-1 fw-bold">{cat.name}</h6>
                                                <p className="text-muted small mb-0">
                                                    {cat.description || "No description"}
                                                </p>
                                            </div>
                                            <div className="d-flex gap-2">
                                                <button
                                                    className="btn btn-sm btn-outline-success"
                                                    onClick={() => handleEdit(cat)}
                                                    title="Edit"
                                                >
                                                    <FaEdit />
                                                </button>
                                                <button
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() => handleDelete(cat.id)}
                                                    title="Delete"
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="text-center text-muted mt-5">
                            <p className="fs-5">No categories added yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
