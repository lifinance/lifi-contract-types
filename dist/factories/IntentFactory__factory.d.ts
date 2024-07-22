import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { IntentFactory, IntentFactoryInterface } from "../IntentFactory";
declare type IntentFactoryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class IntentFactory__factory extends ContractFactory {
    constructor(...args: IntentFactoryConstructorParams);
    deploy(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<IntentFactory>;
    getDeployTransaction(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): IntentFactory;
    connect(signer: Signer): IntentFactory__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b50604051611ca0380380611ca083398101604081905261002f91610092565b600080546001600160a01b0319166001600160a01b03831617905560405161005690610085565b604051809103906000f080158015610072573d6000803e3d6000fd5b506001600160a01b0316608052506100c2565b610df380610ead83390190565b6000602082840312156100a457600080fd5b81516001600160a01b03811681146100bb57600080fd5b9392505050565b608051610dbb6100f260003960008181610106015281816102910152818161036401526106090152610dbb6000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c80637200b82911610076578063ad27eb6f1161005b578063ad27eb6f14610150578063e30c397814610163578063f2fde38b1461018357600080fd5b80637200b829146101285780638da5cb5b1461013057600080fd5b806323452b9c146100a85780632d657c6e146100b25780635b786c95146100ee5780635c60da1b14610101575b600080fd5b6100b0610196565b005b6100c56100c036600461099c565b610260565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100b06100fc366004610a29565b6102be565b6100c57f000000000000000000000000000000000000000000000000000000000000000081565b6100b06104a0565b6000546100c59073ffffffffffffffffffffffffffffffffffffffff1681565b6100b061015e366004610a91565b610586565b6001546100c59073ffffffffffffffffffffffffffffffffffffffff1681565b6100b0610191366004610ae5565b610742565b60005473ffffffffffffffffffffffffffffffffffffffff1633146101e7576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610236576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b600080826040516020016102749190610b02565b6040516020818303038152906040528051906020012090506102b77f000000000000000000000000000000000000000000000000000000000000000082306108a0565b9392505050565b6102ce6040850160208601610ae5565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610332576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000846040516020016103459190610b02565b60405160208183030381529060405280519060200120905060006103897f0000000000000000000000000000000000000000000000000000000000000000836108fd565b6040517ff313816d00000000000000000000000000000000000000000000000000000000815290915073ffffffffffffffffffffffffffffffffffffffff82169063f313816d906103de908990600401610b02565b600060405180830381600087803b1580156103f857600080fd5b505af115801561040c573d6000803e3d6000fd5b50506040517f397a079b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8416925063397a079b915061046690889088908890600401610b7c565b600060405180830381600087803b15801561048057600080fd5b505af1158015610494573d6000803e3d6000fd5b50505050505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146104f2576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105d7576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000836040516020016105ea9190610b02565b604051602081830303815290604052805190602001209050600061062e7f0000000000000000000000000000000000000000000000000000000000000000836108fd565b6040517ff313816d00000000000000000000000000000000000000000000000000000000815290915073ffffffffffffffffffffffffffffffffffffffff82169063f313816d90610683908890600401610b02565b600060405180830381600087803b15801561069d57600080fd5b505af11580156106b1573d6000803e3d6000fd5b50506040517f3f707e6b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169250633f707e6b91506107099087908790600401610c3f565b600060405180830381600087803b15801561072357600080fd5b505af1158015610737573d6000803e3d6000fd5b505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610793576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166107e0576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361082f576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b6000806108e78560006c5af43d3d93803e602a57fd5bf36021528160145273602c3d8160093d39f33d3d3d3d363d3d37363d736000526035600c2090506000602152919050565b90506108f481858561090b565b95945050505050565b60006102b76000848461092d565b600060ff60005350603592835260601b60015260155260556000908120915290565b60006c5af43d3d93803e602a57fd5bf36021528260145273602c3d8160093d39f33d3d3d3d363d3d37363d73600052816035600c86f59050806109785763301164256000526004601cfd5b60006021529392505050565b600060c0828403121561099657600080fd5b50919050565b600060c082840312156109ae57600080fd5b6102b78383610984565b60008083601f8401126109ca57600080fd5b50813567ffffffffffffffff8111156109e257600080fd5b6020830191508360208260051b85010111156109fd57600080fd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff81168114610a2657600080fd5b50565b6000806000806101008587031215610a4057600080fd5b610a4a8686610984565b935060c085013567ffffffffffffffff811115610a6657600080fd5b610a72878288016109b8565b90945092505060e0850135610a8681610a04565b939692955090935050565b600080600060e08486031215610aa657600080fd5b610ab08585610984565b925060c084013567ffffffffffffffff811115610acc57600080fd5b610ad8868287016109b8565b9497909650939450505050565b600060208284031215610af757600080fd5b81356102b781610a04565b8135815260c081016020830135610b1881610a04565b73ffffffffffffffffffffffffffffffffffffffff9081166020840152604084013590610b4482610a04565b9081166040840152606084013590610b5b82610a04565b1660608301526080838101359083015260a092830135929091019190915290565b6040808252810183905260008460608301825b86811015610bcc578235610ba281610a04565b73ffffffffffffffffffffffffffffffffffffffff16825260209283019290910190600101610b8f565b50809250505073ffffffffffffffffffffffffffffffffffffffff83166020830152949350505050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60208082528181018390526000906040808401600586901b8501820187855b88811015610d77577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc088840301845281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa18b3603018112610cbf57600080fd5b8a0160608135610cce81610a04565b73ffffffffffffffffffffffffffffffffffffffff168552818801358886015286820135368390037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1018112610d2357600080fd5b90910187810191903567ffffffffffffffff811115610d4157600080fd5b803603831315610d5057600080fd5b8188870152610d628287018285610bf6565b96890196955050509186019150600101610c5e565b50909897505050505050505056fea2646970667358221220dbe675876e552680ea778ea1615d8625b21675ffda478b28bec2d814c4e7bb7264736f6c6343000811003360a060405234801561001057600080fd5b5030608052608051610dbd6100366000396000818160be01526107cc0152610dbd6000f3fe60806040526004361061005e5760003560e01c80635c60da1b116100435780635c60da1b146100ac57806379502c551461010a578063f313816d146101c657600080fd5b8063397a079b1461006a5780633f707e6b1461008c57600080fd5b3661006557005b600080fd5b34801561007657600080fd5b5061008a610085366004610ade565b6101e6565b005b34801561009857600080fd5b5061008a6100a7366004610b35565b6102fc565b3480156100b857600080fd5b506100e07f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561011657600080fd5b5060005460015460025460035460045460055460065460075460085461016198979673ffffffffffffffffffffffffffffffffffffffff908116968116958116941692919060ff1689565b60408051998a5260208a019890985273ffffffffffffffffffffffffffffffffffffffff968716978901979097529385166060880152918416608087015290921660a085015260c084019190915260e083015260ff1661010082015261012001610101565b3480156101d257600080fd5b5061008a6101e1366004610b77565b61074a565b60045473ffffffffffffffffffffffffffffffffffffffff163314801590610226575060025473ffffffffffffffffffffffffffffffffffffffff163314155b1561025d576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b828110156102f657600084848381811061027c5761027c610b8f565b90506020020160208101906102919190610bbe565b73ffffffffffffffffffffffffffffffffffffffff16036102bd576102b582610951565b600101610260565b6102ed8484838181106102d2576102d2610b8f565b90506020020160208101906102e79190610bbe565b83610970565b50600101610260565b50505050565b60045473ffffffffffffffffffffffffffffffffffffffff16331461034d576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60085460ff161561038a576040517f0dc1019700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600880547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905560005b818110156105025760008383838181106103d4576103d4610b8f565b90506020028101906103e69190610be2565b6103f4906020810190610bbe565b73ffffffffffffffffffffffffffffffffffffffff1684848481811061041c5761041c610b8f565b905060200281019061042e9190610be2565b6020013585858581811061044457610444610b8f565b90506020028101906104569190610be2565b610464906040810190610c20565b604051610472929190610c85565b60006040518083038185875af1925050503d80600081146104af576040519150601f19603f3d011682016040523d82523d6000602084013e6104b4565b606091505b50509050806104ef576040517facfdb44400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50806104fa81610c95565b9150506103b8565b5060055473ffffffffffffffffffffffffffffffffffffffff161580156105e65760065447101561055f576040517f42301c2300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6003546105819073ffffffffffffffffffffffffffffffffffffffff16610951565b6000546003546005546040805173ffffffffffffffffffffffffffffffffffffffff93841681529290911660208301524782820152517f88cb839d71237099623ebb2cbcf82ff9c18e87784e655c264db8c6d20738d9a59181900360600190a2505050565b6005546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610655573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106799190610cf4565b6006549091508110156106b8576040517f42301c2300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6005546003546106e19173ffffffffffffffffffffffffffffffffffffffff9081169116610970565b506000546003546005546040805173ffffffffffffffffffffffffffffffffffffffff938416815292909116602083015281018390527f88cb839d71237099623ebb2cbcf82ff9c18e87784e655c264db8c6d20738d9a59060600160405180910390a250505050565b8060405160200161075b9190610d0d565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905280516020909101206001819055600480547fffffffffffffffffffffffff000000000000000000000000000000000000000016339081179091556000916107f2917f000000000000000000000000000000000000000000000000000000000000000091906109f1565b90503073ffffffffffffffffffffffffffffffffffffffff821614610843576040517fa86b651200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81356000556108586040830160208401610bbe565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790556108ad6060830160408401610bbe565b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790556109026080830160608401610bbe565b600580547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790555060800135600655565b60003860003847855af161096d5763b12d13eb6000526004601cfd5b50565b60006370a0823160005230602052602060346024601c865afa601f3d11166109a0576390b8ec186000526004601cfd5b8160145260345190506fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166109e6576390b8ec186000526004601cfd5b600060345292915050565b600080610a388560006c5af43d3d93803e602a57fd5bf36021528160145273602c3d8160093d39f33d3d3d3d363d3d37363d736000526035600c2090506000602152919050565b9050610a45818585610a4e565b95945050505050565b600060ff60005350603592835260601b60015260155260556000908120915290565b60008083601f840112610a8257600080fd5b50813567ffffffffffffffff811115610a9a57600080fd5b6020830191508360208260051b8501011115610ab557600080fd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff8116811461096d57600080fd5b600080600060408486031215610af357600080fd5b833567ffffffffffffffff811115610b0a57600080fd5b610b1686828701610a70565b9094509250506020840135610b2a81610abc565b809150509250925092565b60008060208385031215610b4857600080fd5b823567ffffffffffffffff811115610b5f57600080fd5b610b6b85828601610a70565b90969095509350505050565b600060c08284031215610b8957600080fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215610bd057600080fd5b8135610bdb81610abc565b9392505050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa1833603018112610c1657600080fd5b9190910192915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610c5557600080fd5b83018035915067ffffffffffffffff821115610c7057600080fd5b602001915036819003821315610ab557600080fd5b8183823760009101908152919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610ced577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b600060208284031215610d0657600080fd5b5051919050565b8135815260c081016020830135610d2381610abc565b73ffffffffffffffffffffffffffffffffffffffff9081166020840152604084013590610d4f82610abc565b9081166040840152606084013590610d6682610abc565b1660608301526080838101359083015260a09283013592909101919091529056fea26469706673582212204cfc168c3851e4035938038f3d2b32a183bf33d84a560e833d4914ae2278d5ac64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "confirmOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deployAndExecuteIntent";
        readonly inputs: readonly [{
            readonly name: "_initData";
            readonly type: "tuple";
            readonly internalType: "struct IIntent.InitData";
            readonly components: readonly [{
                readonly name: "intentId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "owner";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "tokenOut";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "_calls";
            readonly type: "tuple[]";
            readonly internalType: "struct IIntent.Call[]";
            readonly components: readonly [{
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "value";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deployAndWithdrawAll";
        readonly inputs: readonly [{
            readonly name: "_initData";
            readonly type: "tuple";
            readonly internalType: "struct IIntent.InitData";
            readonly components: readonly [{
                readonly name: "intentId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "owner";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "tokenOut";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "tokens";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getIntentAddress";
        readonly inputs: readonly [{
            readonly name: "_initData";
            readonly type: "tuple";
            readonly internalType: "struct IIntent.InitData";
            readonly components: readonly [{
                readonly name: "intentId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "owner";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "tokenOut";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "implementation";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "_newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferRequested";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "NewOwnerMustNotBeSelf";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoNullOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoPendingOwnershipTransfer";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "Unauthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): IntentFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IntentFactory;
}
export {};
