from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    context = {'user' : [{'id' : '1', 'name' : '홍길동'}, {'id' : '2', 'name' : '김철수'}]}
    return render(request, 'polls/index.html', context)