import { initializeApp } from 'firebase/app';
import { doc, getDocs, addDoc, updateDoc, getFirestore, collection } from
"firebase/firestore";
const firebaseConfig = {
apiKey: "your-api-key",
authDomain: "your-auth-domain",
projectId: "your-project-id",
storageBucket: "your-storage-bucket",
messagingSenderId: "your-messaging-sender-id",
appId: "your-app-id"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
// Add Task
addTaskBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task) {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
        taskInput.value = '';
    }
});
// Remove Task on Click
taskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});
//Service worker registration
const sw = new URL('service-worker.js', import.meta.url)
if ('serviceWorker' in navigator) {
const s = navigator.serviceWorker;
s.register(sw.href, {
scope: '/pwaexample/'
})
.then(_ => console.log('Service Worker Registered for scope:', sw.href,
'with', import.meta.url))
.catch(err => console.error('Service Worker Error:', err));
}