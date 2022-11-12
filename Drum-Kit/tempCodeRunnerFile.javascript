function listener(typeofEvent , callback)
{
    var event = {

        eventType :"keydown",
        key:"p"
    }

    if(typeofEvent==eventType)
    {
        callback(listener);
    }
}