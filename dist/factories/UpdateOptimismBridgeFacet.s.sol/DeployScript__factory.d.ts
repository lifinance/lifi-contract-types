import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { DeployScript, DeployScriptInterface } from "../../UpdateOptimismBridgeFacet.s.sol/DeployScript";
declare type DeployScriptConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DeployScript__factory extends ContractFactory {
    constructor(...args: DeployScriptConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<DeployScript>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): DeployScript;
    connect(signer: Signer): DeployScript__factory;
    static readonly bytecode = "0x60806040526000805460ff191660011790553480156200001e57600080fd5b50604051634bca482160e11b815260206004820152600b60248201526a505249564154455f4b455960a81b60448201526000805160206200273d833981519152906397949042906064016020604051808303816000875af115801562000088573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000ae91906200045c565b600490815560408051636c98507360e11b815290516000805160206200273d8339815191529263d930a0e692808201926000929091829003018183875af1158015620000fe573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200012891908101906200052e565b60059062000137908262000612565b5060405163f877cb1960e01b81526020600482015260076024820152664e4554574f524b60c81b60448201526000805160206200273d8339815191529063f877cb19906064016000604051808303816000875af11580156200019d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620001c791908101906200052e565b600690620001d6908262000612565b5060405163f877cb1960e01b815260206004820152600b60248201526a08c92988abea6aa8c8c92b60ab1b60448201526000805160206200273d8339815191529063f877cb19906064016000604051808303816000875af115801562000240573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200026a91908101906200052e565b60079062000279908262000612565b506000600560066007604051602001620002969392919062000759565b60408051601f19818403018152908290526360f9bb1160e01b825291506000906000805160206200273d833981519152906360f9bb1190620002dd908590600401620007e6565b6000604051808303816000875af1158015620002fd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200032791908101906200052e565b9050620003676040518060400160405280600c81526020016b0b931a519a511a585b5bdb9960a21b81525082620003bd60201b62000b5b1790919060201c565b60008054610100600160a81b0319166101006001600160a01b039384168102919091179182905560028054919092049092166001600160a01b031992831681179091556003805490921617905550620008589050565b6040516385940ef160e01b81526000906000805160206200273d833981519152906385940ef190620003f69086908690600401620007fb565b6000604051808303816000875af115801562000416573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200044091908101906200052e565b8060200190518101906200045591906200082d565b9392505050565b6000602082840312156200046f57600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004a95781810151838201526020016200048f565b50506000910152565b60006001600160401b0380841115620004cf57620004cf62000476565b604051601f8501601f19908116603f01168101908282118183101715620004fa57620004fa62000476565b816040528093508581528686860111156200051457600080fd5b620005248660208301876200048c565b5050509392505050565b6000602082840312156200054157600080fd5b81516001600160401b038111156200055857600080fd5b8201601f810184136200056a57600080fd5b6200057b84825160208401620004b2565b949350505050565b600181811c908216806200059857607f821691505b602082108103620005b957634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200060d57600081815260208120601f850160051c81016020861015620005e85750805b601f850160051c820191505b818110156200060957828155600101620005f4565b5050505b505050565b81516001600160401b038111156200062e576200062e62000476565b62000646816200063f845462000583565b84620005bf565b602080601f8311600181146200067e5760008415620006655750858301515b600019600386901b1c1916600185901b17855562000609565b600085815260208120601f198616915b82811015620006af578886015182559484019460019091019084016200068e565b5085821015620006ce5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008154620006ed8162000583565b600182811680156200070857600181146200071e576200074f565b60ff19841687528215158302870194506200074f565b8560005260208060002060005b85811015620007465781548a8201529084019082016200072b565b50505082870194505b5050505092915050565b6000620007678286620006de565b6c2f6465706c6f796d656e74732f60981b815262000789600d820186620006de565b9050601760f91b8152620007a16001820185620006de565b633539b7b760e11b81526004019695505050505050565b60008151808452620007d28160208601602086016200048c565b601f01601f19169290920160200192915050565b602081526000620004556020830184620007b8565b604081526000620008106040830185620007b8565b8281036020840152620008248185620007b8565b95945050505050565b6000602082840312156200084057600080fd5b81516001600160a01b03811681146200045557600080fd5b611ed580620008686000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632c0ad2ad146100515780633a7684631461007a578063c0406226146100ba578063f8ccbf47146100cf575b600080fd5b61006461005f366004611036565b6100ec565b60405161007191906110c8565b60405180910390f35b610095737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100c26102f1565b60405161007191906110db565b6000546100dc9060ff1681565b6040519015158152602001610071565b60408051600a808252818301909252606091600091906020820181803683370190505090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061014557610145611164565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106101a8576101a8611164565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060005b60048110156102ea5761020b60108583600481106101fa576101fa611164565b6102069291901a6111f1565b610c31565b82610217836002611213565b61022290600261122a565b8151811061023257610232611164565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610284601085836004811061027857610278611164565b6102069291901a61123d565b82610290836002611213565b61029b90600361122a565b815181106102ab576102ab611164565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506102e38161125f565b90506101da565b5092915050565b6060600060056006600760405160200161030d9392919061136b565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f60f9bb110000000000000000000000000000000000000000000000000000000082529150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906360f9bb119061038e9085906004016110c8565b6000604051808303816000875af11580156103ad573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526103f391908101906114ee565b9050600061043f6040518060400160405280601481526020017f2e4f7074696d69736d427269646765466163657400000000000000000000000081525083610b5b90919063ffffffff16565b90506005604051602001610453919061153f565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f60f9bb110000000000000000000000000000000000000000000000000000000082529350737109709ecfa91a80626ff3989d68f67f5b1dd12d906360f9bb11906104d19086906004016110c8565b6000604051808303816000875af11580156104f0573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261053691908101906114ee565b91506000610584600660405160200161054f9190611578565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528490610b5b565b905060006105d2600660405160200161059d91906115d7565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528590610c86565b90506000818060200190518101906105ea919061167c565b9050600063899cc31760e01b828560405160240161060992919061174a565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909416939093179092526004805492517fce817d47000000000000000000000000000000000000000000000000000000008152919350737109709ecfa91a80626ff3989d68f67f5b1dd12d9263ce817d47926106dc920190815260200190565b600060405180830381600087803b1580156106f657600080fd5b505af115801561070a573d6000803e3d6000fd5b50506003546040517fadfca15e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8981166004830152909116925063adfca15e9150602401600060405180830381865afa15801561077e573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526107c491908101906117d1565b51600003610a13576040805160018082528183019092526000916020808301908036833701905050905063899cc31760e01b8160008151811061080957610809611164565b7fffffffff00000000000000000000000000000000000000000000000000000000909216602092830291909101820152604080516060810190915273ffffffffffffffffffffffffffffffffffffffff881681526001918101600081526020016108a86040518060400160405280601381526020017f4f7074696d69736d42726964676546616365740000000000000000000000000081525085610d40565b90528154600181018355600092835260209283902082516002928302909101805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117825594840151939490939284927fffffffffffffffffffffff00000000000000000000000000000000000000000016909117907401000000000000000000000000000000000000000090849081111561096157610961611860565b021790555060408201518051610981916001840191602090910190610f44565b50506002546040517f1f931c1c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169150631f931c1c906109df906001908a90879060040161188f565b600060405180830381600087803b1580156109f957600080fd5b505af1158015610a0d573d6000803e3d6000fd5b50505050505b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166352ef6b2c6040518163ffffffff1660e01b8152600401600060405180830381865afa158015610a80573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610ac69190810190611cbc565b97507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610b3957600080fd5b505af1158015610b4d573d6000803e3d6000fd5b505050505050505050505090565b6040517f85940ef1000000000000000000000000000000000000000000000000000000008152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906385940ef190610bb09086908690600401611d4b565b6000604051808303816000875af1158015610bcf573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610c1591908101906114ee565b806020019051810190610c289190611d79565b90505b92915050565b600060098260ff1611610c5257610c49826030611d96565b60f81b92915050565b8160ff16600a11158015610c6a5750600f8260ff1611155b1561004c57600a610c7c836061611d96565b610c499190611daf565b6040517f85940ef1000000000000000000000000000000000000000000000000000000008152606090737109709ecfa91a80626ff3989d68f67f5b1dd12d906385940ef190610cdb9086908690600401611d4b565b6000604051808303816000875af1158015610cfa573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610c2891908101906114ee565b6040805160038082526080820190925260609160009190816020015b6060815260200190600190039081610d5c5790505090506040518060400160405280601d81526020017f736372697074732f636f6e74726163742d73656c6563746f72732e736800000081525081600081518110610dbc57610dbc611164565b60200260200101819052508381600181518110610ddb57610ddb611164565b6020026020010181905250606060005b8451811015610e4c5781610e17868381518110610e0a57610e0a611164565b60200260200101516100ec565b604051602001610e28929190611dc8565b60405160208183030381529060405291508080610e449061125f565b915050610deb565b508082600281518110610e6157610e61611164565b60209081029190910101526040517f89160467000000000000000000000000000000000000000000000000000000008152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d90638916046790610ebf908690600401611e1f565b6000604051808303816000875af1158015610ede573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610f2491908101906114ee565b905080806020019051810190610f3a91906117d1565b9695505050505050565b82805482825590600052602060002090600701600890048101928215610fe05791602002820160005b83821115610fae57835183826101000a81548163ffffffff021916908360e01c02179055509260200192600401602081600301049283019260010302610f6d565b8015610fde5782816101000a81549063ffffffff0219169055600401602081600301049283019260010302610fae565b505b50610fec929150610ff0565b5090565b5b80821115610fec5760008155600101610ff1565b7fffffffff000000000000000000000000000000000000000000000000000000008116811461103357600080fd5b50565b60006020828403121561104857600080fd5b813561105381611005565b9392505050565b60005b8381101561107557818101518382015260200161105d565b50506000910152565b6000815180845261109681602086016020860161105a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000610c28602083018461107e565b6020808252825182820181905260009190848201906040850190845b8181101561112957835173ffffffffffffffffffffffffffffffffffffffff16835292840192918401916001016110f7565b50909695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060ff83168061120457611204611193565b8060ff84160491505092915050565b8082028115828204841417610c2b57610c2b6111c2565b80820180821115610c2b57610c2b6111c2565b600060ff83168061125057611250611193565b8060ff84160691505092915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611290576112906111c2565b5060010190565b8054600090600181811c90808316806112b157607f831692505b602080841082036112eb577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b8180156112ff57600181146113325761135f565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008616895284151585028901965061135f565b60008881526020902060005b868110156113575781548b82015290850190830161133e565b505084890196505b50505050505092915050565b60006113778286611297565b7f2f6465706c6f796d656e74732f0000000000000000000000000000000000000081526113a7600d820186611297565b90507f2e0000000000000000000000000000000000000000000000000000000000000081526113d96001820185611297565b7f6a736f6e0000000000000000000000000000000000000000000000000000000081526004019695505050505050565b6040805190810167ffffffffffffffff8111828210171561142c5761142c611135565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561147957611479611135565b604052919050565b600067ffffffffffffffff83111561149b5761149b611135565b6114cc60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f86011601611432565b90508281528383830111156114e057600080fd5b61105383602083018461105a565b60006020828403121561150057600080fd5b815167ffffffffffffffff81111561151757600080fd5b8201601f8101841361152857600080fd5b61153784825160208401611481565b949350505050565b600061154b8284611297565b7f2f636f6e6669672f6f7074696d69736d2e6a736f6e000000000000000000000081526015019392505050565b7f2e00000000000000000000000000000000000000000000000000000000000000815260006115aa6001830184611297565b7f2e7374616e6461726442726964676500000000000000000000000000000000008152600f019392505050565b7f2e00000000000000000000000000000000000000000000000000000000000000815260006116096001830184611297565b7f2e746f6b656e730000000000000000000000000000000000000000000000000081526007019392505050565b600067ffffffffffffffff82111561165057611650611135565b5060051b60200190565b73ffffffffffffffffffffffffffffffffffffffff8116811461103357600080fd5b6000602080838503121561168f57600080fd5b825167ffffffffffffffff8111156116a657600080fd5b8301601f810185136116b757600080fd5b80516116ca6116c582611636565b611432565b81815260069190911b820183019083810190878311156116e957600080fd5b928401925b8284101561173f57604084890312156117075760008081fd5b61170f611409565b845161171a8161165a565b8152848601516117298161165a565b81870152825260409390930192908401906116ee565b979650505050505050565b60408082528351828201819052600091906020906060850190828801855b828110156117a7578151805173ffffffffffffffffffffffffffffffffffffffff90811686529086015116858501529285019290840190600101611768565b50505073ffffffffffffffffffffffffffffffffffffffff95909516930192909252509092915050565b600060208083850312156117e457600080fd5b825167ffffffffffffffff8111156117fb57600080fd5b8301601f8101851361180c57600080fd5b805161181a6116c582611636565b81815260059190911b8201830190838101908783111561183957600080fd5b928401925b8284101561173f57835161185181611005565b8252928401929084019061183e565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60608152600060608201855480825260808401915060808160051b8501018760005260208060002060005b84811015611c81578784037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80018652815473ffffffffffffffffffffffffffffffffffffffff81168552606085019060a01c60ff1660038110611946577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b858501526060604086015260018381018054808452600091825260208083209401905b80600784011015611a9a5784546119a4838260e01b7fffffffff00000000000000000000000000000000000000000000000000000000169052565b7fffffffff0000000000000000000000000000000000000000000000000000000060c082901b81168a85015260a082901b81166040850152608082901b81166060850152611a1b60808501828460601b167fffffffff00000000000000000000000000000000000000000000000000000000169052565b611a4e60a08501828460401b167fffffffff00000000000000000000000000000000000000000000000000000000169052565b7fffffffff00000000000000000000000000000000000000000000000000000000828b1b8216811660c086015291161660e0830152938301936008929092019161010090910190611969565b93549380831015611adc57611ad3828660e01b7fffffffff00000000000000000000000000000000000000000000000000000000169052565b91830191908701905b80831015611b165760c085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b80831015611b505760a085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b80831015611b8a57608085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b80831015611bc457606085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b80831015611bfe57604085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b80831015611c365784881b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b80831015611c68577fffffffff0000000000000000000000000000000000000000000000000000000085168252908701905b50988601989650505060029290920191506001016118ba565b505073ffffffffffffffffffffffffffffffffffffffff8816908601528481036040860152611cb0818761107e565b98975050505050505050565b60006020808385031215611ccf57600080fd5b825167ffffffffffffffff811115611ce657600080fd5b8301601f81018513611cf757600080fd5b8051611d056116c582611636565b81815260059190911b82018301908381019087831115611d2457600080fd5b928401925b8284101561173f578351611d3c8161165a565b82529284019290840190611d29565b604081526000611d5e604083018561107e565b8281036020840152611d70818561107e565b95945050505050565b600060208284031215611d8b57600080fd5b81516110538161165a565b60ff8181168382160190811115610c2b57610c2b6111c2565b60ff8281168282160390811115610c2b57610c2b6111c2565b60008351611dda81846020880161105a565b835190830190611dee81836020880161105a565b7f20000000000000000000000000000000000000000000000000000000000000009101908152600101949350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015611e92577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0888603018452611e8085835161107e565b94509285019290850190600101611e46565b509297965050505050505056fea264697066735822122005f2ace548fd0d7120bf9d1b5bf93bad4af18c6a3875dc694a0a6a9aa15228c464736f6c634300081100330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): DeployScriptInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DeployScript;
}
export {};
