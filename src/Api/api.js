// export const fetchData_ND = async () => {
//   try {
//     const response = await fetch("http://localhost:8000/api/nguoidung/list");
//     console.log("nguuoidung", response);
//     const data1 = await response.json();
//     console.log("data ne:", data1);
//     return data1;
//   } catch (e) {
//     console.log(e);
//   }
// };

// export const fetchData_P = async () => {
//   try {
//     const response = await fetch("http://localhost:8000/api/phong");
//     console.log("phong", response);
//     const data = await response.json();
//     console.log("data ne:", data);

//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// };
// list phong
const url11 = "http://localhost:8000/api/phong/list";
export const fetchData_P = async () => {
  try {
    const response = await fetch(url11, {
      method: "GET", // or 'PUT'
      body: JSON.stringify(), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Nob3AvcmVnaXN0ZXIiLCJpYXQiOjE1Nzc1MTEyNjAsIm5iZiI6MTU3NzUxMTI2MCwianRpIjoiUkU5VEEwZVdpcDhiVlJWaiIsInN1YiI6IjVlMDZlOTVjZDM3ZDAwMDBhNDAwMmMyNiIsInBydiI6ImY5Zjc2YTEyMGFmNThlNTZjNWQ0NTEzZmMxZDI2YmZjZDVhZDc5MWUifQ.M4TJ5zU6kl-1jMWw-q2HkTa0Qxlyp3H14avd6X0Tyws'
      }
    });
    const json = await response.json();
    console.log("tessssss-datataaaaa", response);
    console.log("Success:", JSON.stringify(json));
    return json;
  } catch (error) {
    console.error("Error:", error);
  }
};
// add phong
const url1 = "http://localhost:8000/api/phong/add";
export const fetchDataPostData_P = async data => {
  console.log("client sent data:", data);
  try {
    const response = await fetch(url1, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Nob3AvcmVnaXN0ZXIiLCJpYXQiOjE1Nzc1MTEyNjAsIm5iZiI6MTU3NzUxMTI2MCwianRpIjoiUkU5VEEwZVdpcDhiVlJWaiIsInN1YiI6IjVlMDZlOTVjZDM3ZDAwMDBhNDAwMmMyNiIsInBydiI6ImY5Zjc2YTEyMGFmNThlNTZjNWQ0NTEzZmMxZDI2YmZjZDVhZDc5MWUifQ.M4TJ5zU6kl-1jMWw-q2HkTa0Qxlyp3H14avd6X0Tyws'
      }
    });
    const json = await response.json();
    console.log("tessssss-datataaaaa", response);
    console.log("Success:", JSON.stringify(json));
  } catch (error) {
    console.error("Error:", error);
  }
};
//xoa phong
// const ur4322 = `http://localhost:8000/api/phong/delete/?id=${data}`;
export const fetchDelete_P = async data => {
  console.error("tesst id delete:", data);
  try {
    const response = await fetch(`http://localhost:8000/api/phong/delete/?id=${data}`, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Nob3AvcmVnaXN0ZXIiLCJpYXQiOjE1Nzc1MTEyNjAsIm5iZiI6MTU3NzUxMTI2MCwianRpIjoiUkU5VEEwZVdpcDhiVlJWaiIsInN1YiI6IjVlMDZlOTVjZDM3ZDAwMDBhNDAwMmMyNiIsInBydiI6ImY5Zjc2YTEyMGFmNThlNTZjNWQ0NTEzZmMxZDI2YmZjZDVhZDc5MWUifQ.M4TJ5zU6kl-1jMWw-q2HkTa0Qxlyp3H14avd6X0Tyws'
      }
    });
    const json = await response.json();
    console.log("xoa du lieu thu", response);
    console.log("Success:", JSON.stringify(json));
  } catch (error) {
    console.error("Error:", error);
  }
};
//update phong
const urll222 = "http://localhost:8000/api/phong/edit";
export const fetchUpdate_P = async data => {
  try {
    const response = await fetch(urll222, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Nob3AvcmVnaXN0ZXIiLCJpYXQiOjE1Nzc1MTEyNjAsIm5iZiI6MTU3NzUxMTI2MCwianRpIjoiUkU5VEEwZVdpcDhiVlJWaiIsInN1YiI6IjVlMDZlOTVjZDM3ZDAwMDBhNDAwMmMyNiIsInBydiI6ImY5Zjc2YTEyMGFmNThlNTZjNWQ0NTEzZmMxZDI2YmZjZDVhZDc5MWUifQ.M4TJ5zU6kl-1jMWw-q2HkTa0Qxlyp3H14avd6X0Tyws'
      }
    });
    const json = await response.json();
    console.log("tessssss-datataaaaa", response);
    console.log("Success:", JSON.stringify(json));
  } catch (error) {
    console.error("Error:", error);
  }
};
// -------------------------Api danh sach nguoi dung-----------------------------------
const url444 = "http://localhost:8000/api/nguoidung/list";
export const fetchData_ND = async () => {
  try {
    const response = await fetch(url444, {
      method: "GET", // or 'PUT'
      body: JSON.stringify(), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Nob3AvcmVnaXN0ZXIiLCJpYXQiOjE1Nzc1MTEyNjAsIm5iZiI6MTU3NzUxMTI2MCwianRpIjoiUkU5VEEwZVdpcDhiVlJWaiIsInN1YiI6IjVlMDZlOTVjZDM3ZDAwMDBhNDAwMmMyNiIsInBydiI6ImY5Zjc2YTEyMGFmNThlNTZjNWQ0NTEzZmMxZDI2YmZjZDVhZDc5MWUifQ.M4TJ5zU6kl-1jMWw-q2HkTa0Qxlyp3H14avd6X0Tyws'
      }
    });
    const json = await response.json();
    console.log("tessssss-datataaaaa", response);
    console.log("Success:", JSON.stringify(json));
    return json;
  } catch (error) {
    console.error("Error:", error);
  }
};

//add nguoi dung
const url = "http://localhost:8000/api/nguoidung/add";
export const fetchDataPostData_ND = async data => {
  try {
    console.log("client sent data nguoi dung:", data);
    const response = await fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Nob3AvcmVnaXN0ZXIiLCJpYXQiOjE1Nzc1MTEyNjAsIm5iZiI6MTU3NzUxMTI2MCwianRpIjoiUkU5VEEwZVdpcDhiVlJWaiIsInN1YiI6IjVlMDZlOTVjZDM3ZDAwMDBhNDAwMmMyNiIsInBydiI6ImY5Zjc2YTEyMGFmNThlNTZjNWQ0NTEzZmMxZDI2YmZjZDVhZDc5MWUifQ.M4TJ5zU6kl-1jMWw-q2HkTa0Qxlyp3H14avd6X0Tyws'
      }
    });
    const json = await response.json();
    console.log("tessssss-datataaaaa", response);
    console.log("Success:", JSON.stringify(json));
  } catch (error) {
    console.error("Error:", error);
  }
};
//sua nguoi dung
const urll = "http://localhost:8000/api/nguoidung/edit";
export const fetchUpdate_ND = async data => {
  try {
    const response = await fetch(urll, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Nob3AvcmVnaXN0ZXIiLCJpYXQiOjE1Nzc1MTEyNjAsIm5iZiI6MTU3NzUxMTI2MCwianRpIjoiUkU5VEEwZVdpcDhiVlJWaiIsInN1YiI6IjVlMDZlOTVjZDM3ZDAwMDBhNDAwMmMyNiIsInBydiI6ImY5Zjc2YTEyMGFmNThlNTZjNWQ0NTEzZmMxZDI2YmZjZDVhZDc5MWUifQ.M4TJ5zU6kl-1jMWw-q2HkTa0Qxlyp3H14avd6X0Tyws'
      }
    });
    const json = await response.json();
    console.log("tessssss-datataaaaa", response);
    console.log("Success:", JSON.stringify(json));
  } catch (error) {
    console.error("Error:", error);
  }
};
//xoa nguoi dung

export const fetchDelete_ND = async data => {
  console.error("tesst id delete:", data);
  try {
    const response = await fetch(`http://localhost:8000/api/nguoidung/delete/?id=${data}`, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Nob3AvcmVnaXN0ZXIiLCJpYXQiOjE1Nzc1MTEyNjAsIm5iZiI6MTU3NzUxMTI2MCwianRpIjoiUkU5VEEwZVdpcDhiVlJWaiIsInN1YiI6IjVlMDZlOTVjZDM3ZDAwMDBhNDAwMmMyNiIsInBydiI6ImY5Zjc2YTEyMGFmNThlNTZjNWQ0NTEzZmMxZDI2YmZjZDVhZDc5MWUifQ.M4TJ5zU6kl-1jMWw-q2HkTa0Qxlyp3H14avd6X0Tyws'
      }
    });
    const json = await response.json();
    console.log("xoa du lieu thu", response);
    console.log("Success:", JSON.stringify(json));
  } catch (error) {
    console.error("Error:", error);
  }
};





