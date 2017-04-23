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
            int[] userOuput = GetPostOutput(trainOuput);
            int[] output = GetPostOutput(Weights.ToArray());

            double mult = 0.01;
            double[] delta = new double[4];
            for (int i = 0; i < m_Weights.Length; i++)
            {
                delta[i] = (userOuput[i] - output[i]) * mult;
            }
            for (int i = 0; i < m_Weights.Length; i++)
            {
                m_Weights[i] += delta[i];
            }
        }

        public int[] GetOutput()
        {
            double[] preOutput = GetPreOutput();
            int[] output = GetPostOutput(preOutput);
            return output;
        }

        private double[] GetPreOutput()
        {
            double[] preOutput = new double[4];
            double weightSum = m_Weights.Sum();
            if (weightSum != 0)
            {
                for (int i = 0; i < m_Weights.Length; i++)
                {
                    preOutput[i] = m_Weights[i] / weightSum;
                }
            }
            return preOutput;
        }
        private int[] GetPostOutput(double[] preOutput)
        {
            int all = 10;
            int[] output = new int[4];
            for (int i = 0; i < m_Weights.Length; i++)
            {
                double dOutput = Math.Round(preOutput[i] * 10.0, MidpointRounding.AwayFromZero);
                int iOutput = Convert.ToInt32(dOutput);
                if (all - iOutput > 0)
                {
                    output[i] = iOutput;
                    all -= iOutput;
                }
                else
                {
                    output[i] = all;
                    all = 0;
                }
            }

            while (all > 0)
            {
                for (int i = 0; i < output.Length; i++)
                {
                    if (all > 0)
                    {
                        output[i]++;
                        all--;
                    }
                    else
                    {
                        break;
                    }
                }
            }
            return output;
        }
    }
}