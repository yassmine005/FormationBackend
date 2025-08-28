const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");

// Créer une notification
router.post("/", notificationController.createNotification);

// Récupérer toutes les notifications
router.get("/", notificationController.getAllNotifications);

// Récupérer les notifications d’un utilisateur
router.get("/user/:userId", notificationController.getNotificationsByUser);

// Marquer comme lue
router.put("/read/:id", notificationController.markAsRead);

// Supprimer une notification
router.delete("/:id", notificationController.deleteNotification);

module.exports = router;
