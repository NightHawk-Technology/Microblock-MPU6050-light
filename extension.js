({
    name: "MPU6050", // Category Name
    description: "MPU6050_light for Microblock IDE",
    author: "NightHawk Robotics",
    category: "Sensors",
    version: "0.0.1",
    icon: "/static/icon.png", // Category icon
    color: "#E74C3C", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        "mpu6050_init",
        "mpu6050_update",
        "mpu6050_get_acc",
        "mpu6050_get_gyro",
        "mpu6050_get_angle"
    ],
    supportArduinoPlatform: true,
    depends: [ // Arduino library
        "MPU6050_light@1.2.1"
    ]
});
