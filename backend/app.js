// import express from 'express';
// import cors from 'cors'; // 1. Import CORS

// const app = express();
// const PORT = 3000;

// app.use(cors()); // 2. Enable CORS for all routes
// app.use(express.json());

// let tasks = [
//     { id: 1, title: 'Learn Express' },
//     { id: 2, title: 'Build an API' }
// ];

// app.get('/tasks', (req, res) => {
//     res.json(tasks);
// });

// app.post('/tasks', (req, res) => {
//     const newTask = { id: Date.now(), title: req.body.title };
//     tasks.push(newTask);
    
//     // This will print in your VS Code / Terminal window:
//     console.log("✅ New Task Added:", newTask);
//     console.log("Current Database:", tasks);

//     res.status(201).json(newTask);
// });

// app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));








import express from 'express';
import cors from 'cors';

const app=express();
const PORT=3000;

app.use(cors())
app.use(express.json())

let tasks=[
    {id :1,title :"Graphics Mini Project",},
    {id :2,title :"Graphics Lab Report 4"},
];

app.get('/tasks',(req,res) =>{
    res.json(tasks)
})

app.post('/tasks',(req,res) => {
    const newTask={id :Date.now(), title:req.body.title};
    tasks.push(newTask);

    console.log("✅ New Task Added:", newTask);
    console.log("Current Database:", tasks);
    res.status(201).json(newTask);
});


app.listen(PORT,() => {console.log(`Backend running on http://localhost${PORT}`)});



