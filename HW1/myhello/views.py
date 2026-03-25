from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Course_table # 記得引入新模型

# 1. 回傳課程列表 
@api_view(['GET'])
def courselist(request):
    courses = Course_table.objects.all().values()
    return JsonResponse(list(courses), safe=False)

# 2. 加入課程 
@api_view(['GET'])
def addcourse(request):
    dept = request.GET.get('Department', '')
    title = request.GET.get('CourseTitle', '')
    instr = request.GET.get('Instructor', '')
    
    new_course = Course_table(Department=dept, CourseTitle=title, Instructor=instr)
    new_course.save()
    
    return Response({"data": title + " added!"}, status=status.HTTP_200_OK)