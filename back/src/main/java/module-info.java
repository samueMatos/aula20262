module com.example.back {
    requires javafx.controls;
    requires javafx.fxml;
    requires java.desktop;
    requires javafx.graphics;


    opens com.example.back to javafx.fxml;
    exports com.example.back;
}