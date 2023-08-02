<?php

namespace App\Http\Controllers;

use App\Http\Requests\Project\ProjectStoreRequest;
use App\Http\Requests\Project\UpdateProjectRequest;
use App\Models\Project;
use Auth;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::where('user_id', Auth::id())->latest()->get(['name', 'results', 'id']);
        return response()->json($projects);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\Project\ProjectStoreRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProjectStoreRequest $request)
    {

        $field_data = $request->all();

        $project_data = [
            'name' => $field_data['name'],
            'results' => $field_data['results'],
            'user_id' => Auth::id()
        ];

        $project = Project::create($project_data);

        if ($project) {
            return response()->json([
                'success' => true,
                'message' => 'Project created successful',
                'data' => [
                    'id' => $project->id,
                    'name' => $project->name,
                    'result' => $project->results,

                ]
            ], 200);
        }
        return response()->json(['success' => false, 'message' => 'Project creation failed', 'data' => null], 400);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        $data = Project::find($project['id'], ['name', 'results', 'id']);
        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Project\UpdateProjectRequest  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        $result = $project->updateOrFail($request->all());
        if ($result) {
            return response()->json(['success' => true, 'message' => 'Project update successful', 'data' => null], 200);
        }
        return response()->json(['success' => false, 'message' => 'Project update failed', 'data' => null], 400);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        $result = $project->deleteOrFail();
        if ($result === true) {
            return response()->json(['success' => true, 'message' => 'Project deleted', 'data' => null], 200);
        }
        return response()->json(['success' => false, 'message' => 'Project delete failed', 'data' => null], 400);
    }
}