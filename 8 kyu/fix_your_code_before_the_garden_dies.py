# Fix your code before the garden dies!

# You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

# Your task is to debug the code before your plants die!

 


"""function rainAmount(mm){
    if (rainAmount = 40) {
         return "You need to give your plant " + {rainAmount - 40} + " mm of water"
    };
    if else {
         return "Your plant has had more than enough water for today!"
    };
}"""




# P: Will we be given empty strings? Will we be given strings? Will we be given special characters? Will we be given arrays? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive number?






def rain_amount(rain_amount):
    if rain_amount >= 40:
        return "Your plant has had more than enough water for today!"
    else:
        return f"You need to give your plant {40-rain_amount}mm of water"
         





def rain_amount(mm):
    if mm < 40:
        return "You need to give your plant " + str(40 - mm) + "mm of water"
    else:
        return "Your plant has had more than enough water for today!"
    





def rain_amount(mm):
    if mm < 40:
        return 'You need to give your plant {}mm of water'.format(40 - mm)
    return 'Your plant has had more than enough water for today!'






def rain_amount(mm):
    if (mm < 40):
         return f"You need to give your plant {40-mm}mm of water"
    else:
         return "Your plant has had more than enough water for today!"
    





def rain_amount(rain_amount):
    if rain_amount < 40:
        return "You need to give your plant " + str(40 - rain_amount) + "mm of water"
    else:
        return "Your plant has had more than enough water for today!"
    





def rain_amount(mm):
    if mm >= 40: return 'Your plant has had more than enough water for today!'
    else: return f'You need to give your plant {40-mm}mm of water'