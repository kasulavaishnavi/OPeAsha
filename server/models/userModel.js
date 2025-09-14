import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
        email: {
        type: String,
        required: true,
        unique: true,
    },
      phoneNum: {
        type: String,
        required: true,
        unique: true,
    },
  password: {
        type: String,
        required: true,
    },
      image: {
        type: String,
       default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAACUCAMAAAD4QXiGAAAARVBMVEX6+vqPj4////+JiYm0tLSMjIyGhobl5eWDg4Ps7Oz19fWUlJSfn5/o6Ojy8vKZmZnPz8/b29vJycm+vr6pqanV1dV9fX3IG3c3AAAD40lEQVR4nO2c23LjIAxAbXG1TXwD5/8/dcFJu2kaJ0BtkGc4T+1DZ85ohAChuqoKhUKhUCgUCoVCoVC4AVD1fePoW/fLSQBoplEbNXRdNyiqx6k/hTxUE1Ud4YSxuq4Zsz91Rgv07gCLqolzfoSxTk2o3W28iXzWvsvLWuTW2wYuRr7UviFpgzTsMA7kjXhdE7WgVAfKXifKQ8rUGqE6UP7B26lzhOrGQ9zCaW7RZ/T7FP8P0blVfwCzr7it7ZiWKYhfm8879R6POnysKj/UBzTm4J3kN/iMRB1EFyRug45lM6UhubKq46jqIIZgc4Uj6NpvD3qEj7mlHa0KDbndjkybW9slS3jIrTqCdIGIZLFn9RGBefD6XGNu8ptX765B27Ds5tDEmcvc4hVMkeaX3EGHOWaBWvMpu3lUabHm2U/pQMPOiV/w7GXxxOax2ZLffDztCo2titkPLtBHmuc/LEJcttS5Q27NI47n9sRFEZhHbaL5NyLXNI9Klz63dxV5m6P5F6glIl0IgmSJ7Vrktl4Jbc5ZcyTtOWiG0JBjWJ+O0MLIUWT5Stj9H8W9/07Y4YWgqIh3YPJ+tGBM4Am5Y/Y0ZzWKZugDrefdiM+5TX+jrx7iV2wRd9ja+PH1nGS/w70EJvVpYiF7Y2sDaHS9ne28mxE9hD4BlTDyddwJp8iq4RPO/for7oxfjahQi1dukqvVg1uMbIXYLapT80lG/wCaRVNzg+rlHEN/d2CdtezXOcsTaRcKhfzAPqQXb8Wo6V/RY+rGCzRzJyX5O1IOY9Jz2KLi+v0vYFIlPLTrOqZnvgWpU712xT47b8J4mqjDxefCGcY1Ta6r3cXTtL1g2TPHv2AJ8gWCpxO9zBNMMDZRb3EfzY8fpot4ofAyP/4VA6bAIVxP8+HwzkAxL+ZB5ses0MNbjuetLYfV8+MfGltzjPnh4ife/cH3LSuMBJcLEIeYJ3lPP6CgM5XiZrH7Za5ONhzV7nbv/4akuUJ7/Q9rEDLVvEsT9A9+n2FDqnkXmPfNl4TTxb2JG91+TcpBOhA7HhjZkPJlGpb9FmniWQCY92p0JZ9z3WuVZphGg3GHhi7rcozRwTT8Ndl5ytb5o/rFbHzyxDPgkuYaG4F2JPGFnbMl4/gFtJRFHQXsX+nMYyMgzBDwgYUv7wHBV2gAhFYbg0SvtYnE8sUlqJqJMk95Ims69Xjmi6BqJ8olf5vzjHFJqGjxaN8AgH6kquvWj3DdZ6HuA1FuIXSd0kuLdE7HPeP3Ypk1pcaoL4yhVM+LwGr9zW0KoXVfnbtcvr88h936J2fzLRQKhUKhUCgUCoVCAv4BF9AyABUIHtoAAAAASUVORK5CYII="
    },
      address: {
        type: Object,
        default: {line1: " ", line2: " "},
        required: false
    },
     gender: {
        type: String,
        default:"not selected"
    },
     dob: {
        type: String,
         default:"not selected"
    },
      otp_verified: { type: Boolean, default: false },
  registration_otp: {
    code: { type: String },
    expires: { type: Date }
  },
  login_otp: {
    code: { type: String },
    expires: { type: Date },
    verified: { type: Boolean, default: false }
  }
})

const userModel = mongoose.models.user || mongoose.model('userModel', userSchema);

export default userModel