using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishGame.Common
{
    public class NeuralNetwork
    {
        public IEnumerable<double> Weights
        {
            get
            {
                return m_Weights;
            }
        }
        private double[] m_Weights;

        public NeuralNetwork(double[] weights)
        {
            m_Weights = weights;
        }

        public void Train(double[] trainOuput)
        {
            double mult = 0.01;
            double[] output = GetOutput();

            /*double[] b = new double[4];
            for(int i = 0; i < b.Length; i++)
            {
                b[i] = -output[i] * (1 - output[i]) * (trainOuput[i] - output[i]);
            }*/

            double[] delta = new double[4];
            for (int i = 0; i < m_Weights.Length; i++)
            {
                delta[i] = (trainOuput[i] - output[i]) * mult;
            }
            for (int i = 0; i < m_Weights.Length; i++)
            {
                m_Weights[i] += delta[i];
            }
        }

        public List<Operation> GetOperations()
        {
            List<Operation> operations = new List<Operation>();
            double[] output = GetOutput();
            if(output[0] == 1)
            {
                operations.Add(Operation.Sum);
            }
            if (output[1] == 1)
            {
                operations.Add(Operation.Sub);
            }
            if (output[2] == 1)
            {
                operations.Add(Operation.Mult);
            }
            if (output[3] == 1)
            {
                operations.Add(Operation.Div);
            }
            return operations;
        }

        private double[] GetOutput()
        {
            double[] thresholds = new double[] { 0.33, 0.33, 0.33, 0.33 };
            double[] output = new double[4];
            for(int i = 0; i < m_Weights.Length; i++)
            {
                if(m_Weights[i] >= thresholds[i])
                {
                    output[i] = 1;
                }
            }
            return output;
        }

        private double[] ActivationFunction(double[] inputs)
        {
            double[] outputs = new double[4];
            for(int i = 0; i < inputs.Length; i++)
            {
                outputs[i] = Sigmoid(inputs[i]);
            }
            return outputs;
        }

        private double Sigmoid(double x)
        {
            double y = 1 / (1 + Math.Exp(-x));
            return y;
        }
    }

    public enum Operation
    {
        Sum = 1,
        Sub = 2,
        Mult = 3,
        Div = 4
    }
}
