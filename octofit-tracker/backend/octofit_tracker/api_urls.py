from rest_framework import routers
from octofit_tracker import views

router = routers.DefaultRouter()
# Die ViewSets werden später registriert, z.B.:
# router.register(r'users', views.UserViewSet, basename='user')
# router.register(r'teams', views.TeamViewSet, basename='team')
# router.register(r'activities', views.ActivityViewSet, basename='activity')
# router.register(r'leaderboard', views.LeaderboardViewSet, basename='leaderboard')
# router.register(r'workouts', views.WorkoutViewSet, basename='workout')

urlpatterns = router.urls
