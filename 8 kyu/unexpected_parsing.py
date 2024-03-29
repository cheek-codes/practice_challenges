# Unexpected parsing

# here is a piece of code:

# def get_status(is_busy):
#     status = "busy" if is_busy else "available"
#     return status

# expected behavior

# Function should return a dictionary/object/hash with "status" as a key, whose value can: "busy" or "available" depending on the truth value of the argument "is_busy".

# But as you will see after clicking "run" or "attempt" this code has several bugs, please fix them.






def get_status(is_busy):
    status = "busy" if is_busy else "available"
    return {"status" : status}






def get_status(is_busy): return {'status': ("busy" if is_busy else "available")}







def get_status(is_busy):
    return {"status": "busy"} if is_busy else {"status": "available"}






get_status=lambda b:{'status':['available','busy'][b]}






def get_status(is_busy):   
    status = {"status": "busy" if is_busy else "available"}
    return status






def get_status(is_busy):
    return dict(status = "busy" if is_busy else "available")






def get_status(is_busy):
    msg = {}
    msg['status'] = "available"
    if is_busy:
        msg['status'] = "busy"
    return msg






# Using "not" so it will work even if busy is different from 0 and 1
def get_status(is_busy):
    return {"status":("busy", "available")[not is_busy]}






get_status = lambda busy: {'status': ['available', 'busy'][busy]}






get_status=lambda is_busy: {"status": "busy" if is_busy else "available"}
