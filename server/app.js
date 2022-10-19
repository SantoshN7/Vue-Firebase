const express = require('express');
const cors = require('cors');
const firebaseadmin = require('./firebaseConfig');
const admin = require("firebase-admin");
const {authMiddleware} = require('./middleware'); 

const app = express();
app.use(cors());
app.use(authMiddleware);

app.get('/api/courses', async (req, res) => {
  const courses_snapshot = await firebaseadmin.firestore().collection('cources').get();
  const courses = courses_snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() }
  });
  return res.send(courses);
});

app.get('/api/user/:uid/registeredCourses', async (req, res) => {
  const query_snapshot = await firebaseadmin.firestore().collectionGroup('registeredCourses').where('userId', '==', req.params.uid).get();
  const courceIds = query_snapshot.docs.map((doc) => doc.data().courseId);
  const registeredCourses_snapshot = await firebaseadmin.firestore().collection('cources').where(admin.firestore.FieldPath.documentId(), 'in', courceIds).get();
  const courses = registeredCourses_snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() }
  });
  return res.send(courses);
});

const port = 8080; // Server running on port
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});