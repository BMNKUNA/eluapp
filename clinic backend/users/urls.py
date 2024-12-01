from django.urls import path
from .views import PatientRegistrationView, StaffRegistrationView, LoginView

urlpatterns = [
    path('register/patient/', PatientRegistrationView.as_view(), name='register_patient'),
    path('register/staff/', StaffRegistrationView.as_view(), name='register_staff'),
    path('login/', LoginView.as_view(), name='login'),
]