houses = ["gryfindor", "ravenclaw", "hufflepuff", "slytherin"]


class Validators:

    def validate_new_student(self, student):
        try:
            self.validate_student_keys(student)
            self.validate_student_name(student["first_name"], student['last_name'])
            self.validate_house(student['house'])
        except Exception as error:
            raise error

    def validate_student_keys(self, student):
        try:
            student['first_name']
        except Exception as e:
            raise ValueError("First name is required.")
        try:
            student['last_name']
        except Exception as e:
            raise ValueError("Last name is required")
        try:
            student['house']
        except Exception as e:
            raise ValueError("House is required.")

    def validate_student_name(self, first_name, last_name):
        first_name = str(first_name)
        last_name = str(last_name)
        if not first_name.isalpha() or first_name is None:
            raise ValueError("First name is missing contains an invalid character.")
        if not last_name.isalpha() or first_name is None:
            raise ValueError("Last name is missing contains an invalid character.")






    def validate_house(self, student_house):
        if not student_house.lower() in houses:
            raise ValueError("House {} does not exist.".format(student_house))





