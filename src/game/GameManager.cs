using UnityEngine;
using System.Collections.Generic;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance;

    [Header("Game Resources")]
    public float ComputePower = 0;
    public float Capital = 1000000; // Starting capital
    public float TalentPool = 10;

    [Header("Technology Tree")]
    public bool HasMoE = false;
    public bool HasRLHF = true;
    public int ModelGeneration = 3; // Starts at GPT-3 era

    // Simple event system
    public delegate void TurnEvent();
    public event TurnEvent OnTurnStart;

    void Awake()
    {
        if (Instance == null) Instance = this;
    }

    void Start()
    {
        Debug.Log("Game Started: LLM Architecture War Sim");
        StartTurn();
    }

    public void StartTurn()
    {
        Debug.Log($"Turn Started. Capital: {Capital}, Compute: {ComputePower}");
        
        // Simulate Monthly Costs
        Capital -= 50000; 

        // Trigger Historical Events based on turn count
        CheckHistoricalEvents();
    }

    public void ResearchMoE()
    {
        if (Capital > 200000)
        {
            Capital -= 200000;
            HasMoE = true;
            Debug.Log("Research Complete: Mixture of Experts! Training costs reduced by 80%.");
        }
        else
        {
            Debug.Log("Not enough capital to research MoE.");
        }
    }

    public void TrainModel(string architecture)
    {
        float cost = 1000000;
        if (architecture == "MoE" && HasMoE)
        {
            cost *= 0.2f; // MoE discount
        }
        else if (architecture == "Dense")
        {
            // Standard cost
        }

        if (Capital >= cost)
        {
            Capital -= cost;
            ModelGeneration++;
            Debug.Log($"Model Trained! Generation: {ModelGeneration} ({architecture})");
        }
        else
        {
            Debug.Log("Insufficient capital to train model.");
        }
    }

    void CheckHistoricalEvents()
    {
        // Logic to check turn number and trigger specific events
        // e.g., Turn 5 -> DeepSeek Release (Competitor price drop)
    }
}
