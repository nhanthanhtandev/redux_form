import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    students: [],
    searchResult: null,
};

const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        addStudent: (state, action) => {
            const newStudent = action.payload;
            const isExist = state.students.some((student) => student.Id === newStudent.Id);
            if (isExist) {
                // Nếu đã tồn tại thì xử lý phù hợp, ví dụ như không thực hiện thêm
                alert("Đã tồn tại mã số sinh viên :  " + (newStudent.Id))
            } else {
                // Nếu chưa tồn tại thì thêm vào state
                state.students.push(newStudent);
            }
        },
        findStudent: (state, action) => {
            const searchTerm = action.payload.toLowerCase();

            const result = state.students.find(student =>
                student.fullName.toLowerCase().includes(searchTerm) ||
                student.Id.toLowerCase().includes(searchTerm)
            );

            if (!result) {
                // Nếu đã tồn tại thì xử lý phù hợp, ví dụ như không thực hiện thêm
                state.searchResult = 'No matching student found';
            } else {
                // Nếu chưa tồn tại thì thêm vào state
                state.searchResult = result;

            }
        },
        clearSearchResult: (state) => {
            state.searchResult = null;
        }
    }
});

export const { addStudent, findStudent, clearSearchResult } = studentSlice.actions;

export default studentSlice.reducer;