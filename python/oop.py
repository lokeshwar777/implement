class Car:
    total_cars = 0  # class variable

    def __init__(self, brand=None, model=None):
        self.__model = model
        # self.brand = brand
        self.__brand = brand  # private attribute (encapsulation)
        # self.total_cars += 1 # wrong
        Car.total_cars += 1

    def display_full_name(self):
        return f"Car brand is {self.__d} and model is {self.__model}"

    def get_brand(self):  # getter method
        return self.__brand

    def fuel_type(self):
        return "Petrol or Diesel or CNG or LPG, just for fun!"

    # def general_description(self): # not desirable
    #     return f"cars have 4 wheels"

    @staticmethod
    # note that self is not requied for class methods
    def general_description():
        return f"cars have 4 wheels"

    @property  # method as an attribute
    def model(self):
        return self.__model


class ElectricCar(Car):  # inheritance
    def __init__(self, brand=None, model=None, battery_size=0):
        super().__init__(brand, model)  # parent constructor
        self.battery_size = battery_size

    def fuel_type(self):  # polymorphism
        return "electricity, obviously!"


class Battery:
    pass


class Engine:
    pass


class NuclearCar(Car, Battery, Engine):  # multiple inheritance
    pass


car1 = Car()
thor = Car("mercedes", "benz")
ecar = ElectricCar("Tata", "Nexa", 100)
# print(car1.display_full_name())
# print(thor.display_full_name())
# print(thor.fuel_type())
# print(ecar.brand)
# print(ecar.model)
# print(ecar.battery_size)
# print(ecar.display_full_name())
# print(ecar.fuel_type())
# print(Car.total_cars)
# print(car1.general_description()) # ?
# print(Car.general_description())
# print(ecar.model)
# print(isinstance(thor, Car))
# print(isinstance(thor, ElectricCar))
# print(isinstance(ecar, Car))
# print(isinstance(ecar, ElectricCar))
