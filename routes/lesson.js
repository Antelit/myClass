const express = require('express');
const { Op, fn, col } = require('sequelize');

const router = express.Router();
const { Lessons } = require('../db/model/Lesson');
const { Teacher } = require('../db/model/Teacher');
const { Student } = require('../db/model/Student');
const { LessonTeacher } = require('../db/model/LessonTeacher');
const { LessonStudents } = require('../db/model/LessonStudents');

router.get('/lessons', async (req, res) => {
    const { data, teacherIds, status, studentsCount } = req.query;

    try {
        let where = { };

        if (status) {
            where = { ...where, status };
        }

        if (teacherIds) {
            const LessonTeacherRows = await LessonTeacher.findAll({
                where: { teacher_id: teacherIds.split(',') },
                raw: true,
            });
            const idLessons = LessonTeacherRows.map((el) => el.lesson_id);
            where = { ...where, id: idLessons };
        }

        if (data) {
            const [start, end] = data.split(',');
            where = {
                ...where,
                date: {
                    [Op.gte]: start,
                    [Op.lte]: end || start,
                },
            };
        }

        if (studentsCount) {
            const [min, max] = studentsCount.split(',').map(el => parseInt(el, 10));
            const LessonStudentsRows = await LessonStudents.findAll({
                group: ['lesson_id'],
                attributes: ['lesson_id', [fn('count', col('student_id')), 'cnt']],
            });

            let LessenHasStudents = LessonStudentsRows
                .filter((el) => {
                    const { cnt } = el.toJSON();
                    if (max) return parseInt(cnt, 10) >= min && cnt <= parseInt(max, 10);
                    return parseInt(cnt, 10) === min;
                })
                .map((el) => el.lesson_id);

            console.log(LessenHasStudents)
            console.log({ w: where.id })
            if (where.id) {
                LessenHasStudents = where.id
                    .filter((el) => LessenHasStudents.includes(el));
            }
            where = { ...where, id: LessenHasStudents };
        }

        console.log(where)
        let LessonRows = await Lessons
            .findAll({
                include: [
                    {
                        model: Teacher,
                        as: 'teachers',
                        through: { attributes: [] },
                    },
                    {
                        model: Student,
                        as: 'students',
                        // through: { attributes: ['visit'] },
                    },
                ],
                where,
            });

        LessonRows = LessonRows.map((element) => {
            const { students } = element.toJSON();
            const visitCount = students.filter((stud) => stud.LessonStudents.visit).length;
            return { ...element.toJSON(), visitCount };
        });
        res.json(LessonRows);
    } catch (err) {
        res.send(err.message).status(500);
    }
});

module.exports = router;
