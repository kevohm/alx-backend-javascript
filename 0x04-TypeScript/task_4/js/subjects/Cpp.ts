/// <reference path="Subject.ts" />
/// <reference path="Teacher.ts" />

namespace Subjects {
    export interface TeacherInterface {
        experienceTeachingC?: number;
    }

    export class Cpp extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Cpp";
        }

        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingC > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return "No available teacher";
        }

    }
}