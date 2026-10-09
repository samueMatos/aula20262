module com.example.back {
    requires javafx.controls;
    requires javafx.fxml;
    requires java.desktop;


    opens com.example.back to javafx.fxml;
    exports com.example.back;
}