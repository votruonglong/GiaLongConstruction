import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { database } from '../../utils/firebaseConfig'
import {
    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    doc,
    getDoc
} from "firebase/firestore";


// Fetch Projects
export const fetchProject = createAsyncThunk(
    "projects/fetchProjects",
    async () => {
        const projectsCollection = collection(database, "construction");

        const projectsSnapshot = await getDocs(projectsCollection);

        const projectsList = projectsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return projectsList;
    }
);

export const fetchProjectById = createAsyncThunk(
    "projects/fetchProjectById",
    async (id) => {
        const projectDoc = doc(database, "construction", id);

        const projectSnapshot = await getDoc(projectDoc);

        if (projectSnapshot.exists()) {
            return { id: projectSnapshot.id, ...projectSnapshot.data() };
        } else {
            throw new Error("Project not found");
        }
    }
);

// Create Project
export const createProject = createAsyncThunk(
    "projects/createProject",
    async (newProject) => {
        const projectsCollection = collection(database, "construction/projects");
        const docRef = await addDoc(projectsCollection, newProject);
        return { id: docRef.id, ...newProject }; // Trả về project với ID
    }
);

// Update Project
export const updateProject = createAsyncThunk(
    "projects/updateProject",
    async ({ id, updatedData }) => {
        const projectDoc = doc(database, "construction/projects", id);
        await updateDoc(projectDoc, updatedData);
        return { id, ...updatedData }; // Trả về project đã cập nhật
    }
);

// Delete Project
export const deleteProject = createAsyncThunk(
    "projects/deleteProject",
    async (id) => {
        const projectDoc = doc(database, "construction/projects", id);
        await deleteDoc(projectDoc);
        return id; // Trả về ID của project đã xóa
    }
);

const projectSlice = createSlice({
    name: "projects",
    initialState: {
        projects: [],
        currentPage: 1,
        pageSize: 8,
        totalCount: 0,
        error: null,
        status: "idle",
        loading: null
    },
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload
        },
        setPageSize: (state, action) => {
            state.pageSize = action.payload
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProject.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProject.fulfilled, (state, action) => {
                state.projects = action.payload;
                state.status = "succeeded";
            })
            .addCase(fetchProject.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = "failed";
            })
            .addCase(fetchProjectById.pending, (state) => {
                state.status = 'loading';  // Khi đang fetch, đặt trạng thái là loading
                state.error = null;        // Xóa lỗi trước đó (nếu có)
            })
            .addCase(fetchProjectById.fulfilled, (state, action) => {
                state.status = 'succeeded';  // Fetch thành công
                state.project = action.payload;  // Lưu dữ liệu dự án vào state
            })
            .addCase(fetchProjectById.rejected, (state, action) => {
                state.status = 'failed';     // Khi fetch thất bại
                state.error = action.error.message;  // Lưu thông báo lỗi
            });
        // //create Category
        // .addCase(createCategory.pending, (state) => {
        //     state.loading = true;
        //     state.status = "loading";
        // })
        // .addCase(createCategory.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.status = "succeeded";
        //     state.categories.push(action.payload);
        // })
        // .addCase(createCategory.rejected, (state, action) => {
        //     state.loading = false;
        //     state.status = "failed";
        //     state.error = action.payload;
        // })
        // //update Categories
        // .addCase(updateCategory.pending, (state) => {
        //     state.loading = true;
        //     state.status = "loading";
        // })
        // .addCase(updateCategory.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.status = "succeeded";
        //     const index = state.categories.findIndex(
        //         (category) => category.id === action.payload.id
        //     );
        //     if (index !== -1) {
        //         state.categories[index] = action.payload;
        //     }
        // })
        // .addCase(updateCategory.rejected, (state, action) => {
        //     state.loading = false;
        //     state.status = "failed";
        //     state.error = action.payload;
        // })
        // //delete Categories
        // .addCase(deleteCategory.pending, (state) => {
        //     state.loading = true;
        //     state.status = "loading";
        // })
        // .addCase(deleteCategory.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.status = "succeeded";
        //     state.categories = state.categories.filter(
        //         (category) => category.id !== action.payload
        //     );
        // })
        // .addCase(deleteCategory.rejected, (state, action) => {
        //     state.loading = false;
        //     state.status = "failed";
        //     state.error = action.payload;
        // });

    },
});

export const { setPage, setPageSize } = projectSlice.actions;

export default projectSlice.reducer;
