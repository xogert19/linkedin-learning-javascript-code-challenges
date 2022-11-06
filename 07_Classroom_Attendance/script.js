const getStudents = (classroom) => {
    const { hasTeachingAssistant, classlist } = classroom;

    if (hasTeachingAssistant) {
        const [teacher, assistant, ...students] = classlist;
        return students;
    } else {
        const [teacher, ...students] = classlist;
        return students;
    }
}