import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ArbitrumBridgeFacet, ArbitrumBridgeFacetInterface } from "../ArbitrumBridgeFacet";
declare type ArbitrumBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ArbitrumBridgeFacet__factory extends ContractFactory {
    constructor(...args: ArbitrumBridgeFacetConstructorParams);
    deploy(_gatewayRouter: PromiseOrValue<string>, _inbox: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ArbitrumBridgeFacet>;
    getDeployTransaction(_gatewayRouter: PromiseOrValue<string>, _inbox: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ArbitrumBridgeFacet;
    connect(signer: Signer): ArbitrumBridgeFacet__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b506040516121c63803806121c683398101604081905261002e91610060565b6001600160a01b039182166080521660a052610091565b80516001600160a01b038116811461005b575f5ffd5b919050565b5f5f60408385031215610071575f5ffd5b61007a83610045565b915061008860208401610045565b90509250929050565b60805160a05161210d6100b95f395f6106a201525f818161081b0152610892015261210d5ff3fe608060405260043610610028575f3560e01c80633cc9517b1461002c578063c9851d0b14610041575b5f5ffd5b61003f61003a366004611aec565b610054565b005b61003f61004f366004611b99565b6102a4565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df3447611c12565b90508680610100015161011e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861017f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101f3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610230576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610243604089013560208a0135611c25565b61024e908935611c3c565b90506102658b5f01518c60c001518c8c33866104e6565b60c08c01526102758b8983610681565b50479250505081811115610297576102975f846102928585611c12565b6109d9565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161031f576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61032f3447611c12565b9050848061010001511561036f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101200151156103ad576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866103d08160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610407576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610444576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610481576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610494604089013560208a0135611c25565b61049f908935611c3c565b90506104b389608001518a60c00151610a0e565b6104be898983610681565b504792505050818111156104db576104db5f846102928585611c12565b50505f909155505050565b5f83808203610521576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f868661052f600185611c12565b81811061053e5761053e611c4f565b90506020028101906105509190611c7c565b610561906080810190606001611cb8565b90505f61056d82610ac2565b905073ffffffffffffffffffffffffffffffffffffffff8216610597576105943482611c12565b90505b5f6105a28989610b0c565b90506105ae8989610c16565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff891660208201529081018790526105e9818b8b85610c82565b5f836105f486610ac2565b6105fe9190611c12565b905073ffffffffffffffffffffffffffffffffffffffff8516610628576106258882611c12565b90505b8b811015610671576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b608083015173ffffffffffffffffffffffffffffffffffffffff166107cc577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16636e6e8a6a828560c001516106ec9190611c3c565b60a086015160c08701516040805160e086901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff90931660048401819052602484019290925287356044840152606483018290526084830191909152602087013560a483015286013560c482015261010060e48201525f6101048201526101240160206040518083038185885af11580156107a1573d5f5f3e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906107c69190611cda565b5061099d565b60808301516040517fbda009fe00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff808316600483015261089092917f00000000000000000000000000000000000000000000000000000000000000009091169063bda009fe90602401602060405180830381865afa158015610862573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108869190611cf1565b8560c0015161106a565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d2ce7d658285608001518660a001518760c0015187602001358860400135895f013560405160200161090a9181526040602082018190525f9082015260600190565b6040516020818303038152906040526040518863ffffffff1660e01b815260040161093a96959493929190611d58565b5f6040518083038185885af1158015610955573d5f5f3e3d5ffd5b50505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261099b9190810190611dc0565b505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1836040516109cc9190611e35565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316610a03576109fe8282611096565b505050565b6109fe838383611103565b805f03610a47576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610aa05780341015610a9c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610a9c73ffffffffffffffffffffffffffffffffffffffff8316333084611171565b5f73ffffffffffffffffffffffffffffffffffffffff821615610b0457610aff73ffffffffffffffffffffffffffffffffffffffff8316306111c9565b610b06565b475b92915050565b6060815f8167ffffffffffffffff811115610b2957610b2961186e565b604051908082528060200260200182016040528015610b52578160200160208202803683370190505b5090505f805b83811015610c0b57868682818110610b7257610b72611c4f565b9050602002810190610b849190611c7c565b610b95906080810190606001611cb8565b9150610ba082610ac2565b838281518110610bb257610bb2611c4f565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610c035734838281518110610beb57610beb611c4f565b60200260200101818151610bff9190611c12565b9052505b600101610b58565b509095945050505050565b5f5b818110156109fe5736838383818110610c3357610c33611c4f565b9050602002810190610c459190611c7c565b9050610c5760e0820160c08301611f48565b15610c7957610c79610c6f6060830160408401611cb8565b8260800135610a0e565b50600101610c18565b602084015160408501518491849184908360018114610f84575f8686610ca9600185611c12565b818110610cb857610cb8611c4f565b9050602002810190610cca9190611c7c565b610cdb906080810190606001611cb8565b90505f89815b81811015610e8457368d8d83818110610cfc57610cfc611c4f565b9050602002810190610d0e9190611c7c565b9050610d3d610d236060830160408401611cb8565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d9f5750610d9f610d566040830160208401611cb8565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610db65750610db6610d566020830183611cb8565b8015610e395750610e39610dcd60a0830183611f61565b610ddb916004915f91611fc9565b610de491611ff0565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e6f576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51610e7b90826111fc565b50600101610ce1565b505f90505b610e94600185611c12565b811015610f7c575f898983818110610eae57610eae611c4f565b9050602002810190610ec09190611c7c565b610ed1906080810190606001611cb8565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610f7357868281518110610f1857610f18611c4f565b6020026020010151610f2982610ac2565b610f339190611c12565b92505f73ffffffffffffffffffffffffffffffffffffffff821615610f58575f610f5a565b865b90508315610f7157610f71828a6102928488611c12565b505b50600101610e89565b50505061105e565b875f5b8181101561105b57368b8b83818110610fa257610fa2611c4f565b9050602002810190610fb49190611c7c565b9050610fc9610d236060830160408401611cb8565b80610fe25750610fe2610d566040830160208401611cb8565b8015610ff95750610ff9610d566020830183611cb8565b80156110105750611010610dcd60a0830183611f61565b611046576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c5161105290826111fc565b50600101610f87565b50505b50505050505050505050565b6109fe8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6114ef565b73ffffffffffffffffffffffffffffffffffffffff82166110e3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a9c73ffffffffffffffffffffffffffffffffffffffff83168261161c565b73ffffffffffffffffffffffffffffffffffffffff8216611150576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109fe73ffffffffffffffffffffffffffffffffffffffff84168383611635565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166111bc57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61123261120c6020830183611cb8565b7f91765d13665119d9c89a9e8beb9cfeb4a5a44ca96d7513e297e1357af2479ef061167e565b611268576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036112a7576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6112bb610d236060850160408601611cb8565b6112c5575f6112cb565b82608001355b90505f6112e66112e16060860160408701611cb8565b610ac2565b90505f6112fc6112e16080870160608801611cb8565b9050825f03611332576113326113186060870160408801611cb8565b6113286040880160208901611cb8565b876080013561106a565b846080013582101561137d576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610668565b5f8061138c6020880188611cb8565b73ffffffffffffffffffffffffffffffffffffffff16856113b060a08a018a611f61565b6040516113be929190612056565b5f6040518083038185875af1925050503d805f81146113f8576040519150601f19603f3d011682016040523d82523d5f602084013e6113fd565b606091505b50915091508161141057611410816117e6565b5f6114246112e160808a0160608b01611cb8565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961145560208b018b611cb8565b61146560608c0160408d01611cb8565b61147560808d0160608e01611cb8565b8c608001358987116114875786611491565b6114918a88611c12565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156116165773ffffffffffffffffffffffffffffffffffffffff8316611558576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156115cb573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906115ef9190611cda565b10156116165761161673ffffffffffffffffffffffffffffffffffffffff851684836117f0565b50505050565b5f385f3884865af1610a9c5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611675576390b8ec185f526004601cfd5b5f603452505050565b6040805173ffffffffffffffffffffffffffffffffffffffff84811660248084019190915283518084039091018152604490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167ffab46d660000000000000000000000000000000000000000000000000000000017905291515f9283928392918616916117129190612065565b5f60405180830381855afa9150503d805f811461174a576040519150601f19603f3d011682016040523d82523d5f602084013e61174f565b606091505b5091509150818015611762575080516040145b156117dc575f5f8280602001905181019061177d919061207b565b90925090507f10ff0000000000000000000000000000000000000000000000000000000000007fffffff00000000000000000000000000000000000000000000000000000000008316016117d9573b15159350610b0692505050565b50505b505050503b151590565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611675575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661167557633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156118bf576118bf61186e565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561190c5761190c61186e565b604052919050565b5f67ffffffffffffffff82111561192d5761192d61186e565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f82601f830112611968575f5ffd5b813561197b61197682611914565b6118c5565b81815284602083860101111561198f575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146119cc575f5ffd5b50565b80356119da816119ab565b919050565b803580151581146119da575f5ffd5b5f61014082840312156119ff575f5ffd5b611a0761189b565b823581529050602082013567ffffffffffffffff811115611a26575f5ffd5b611a3284828501611959565b602083015250604082013567ffffffffffffffff811115611a51575f5ffd5b611a5d84828501611959565b604083015250611a6f606083016119cf565b6060820152611a80608083016119cf565b6080820152611a9160a083016119cf565b60a082015260c0828101359082015260e08083013590820152611ab761010083016119df565b610100820152611aca61012083016119df565b61012082015292915050565b5f60608284031215611ae6575f5ffd5b50919050565b5f5f5f5f60a08587031215611aff575f5ffd5b843567ffffffffffffffff811115611b15575f5ffd5b611b21878288016119ee565b945050602085013567ffffffffffffffff811115611b3d575f5ffd5b8501601f81018713611b4d575f5ffd5b803567ffffffffffffffff811115611b63575f5ffd5b8760208260051b8401011115611b77575f5ffd5b60209190910193509150611b8e8660408701611ad6565b905092959194509250565b5f5f60808385031215611baa575f5ffd5b823567ffffffffffffffff811115611bc0575f5ffd5b611bcc858286016119ee565b925050611bdc8460208501611ad6565b90509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610b0657610b06611be5565b8082028115828204841417610b0657610b06611be5565b80820180821115610b0657610b06611be5565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611cae575f5ffd5b9190910192915050565b5f60208284031215611cc8575f5ffd5b8135611cd3816119ab565b9392505050565b5f60208284031215611cea575f5ffd5b5051919050565b5f60208284031215611d01575f5ffd5b8151611cd3816119ab565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff8716815273ffffffffffffffffffffffffffffffffffffffff8616602082015284604082015283606082015282608082015260c060a08201525f611db460c0830184611d0c565b98975050505050505050565b5f60208284031215611dd0575f5ffd5b815167ffffffffffffffff811115611de6575f5ffd5b8201601f81018413611df6575f5ffd5b8051611e0461197682611914565b818152856020838501011115611e18575f5ffd5b8160208401602083015e5f91810160200191909152949350505050565b60208152815160208201525f60208301516101406040840152611e5c610160840182611d0c565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611e978282611d0c565b9150506060840151611ec1608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611f3061012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611f58575f5ffd5b611cd3826119df565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611f94575f5ffd5b83018035915067ffffffffffffffff821115611fae575f5ffd5b602001915036819003821315611fc2575f5ffd5b9250929050565b5f5f85851115611fd7575f5ffd5b83861115611fe3575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561204f577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f82518060208501845e5f920191825250919050565b5f5f6040838503121561208c575f5ffd5b82517fffffff0000000000000000000000000000000000000000000000000000000000811681146120bb575f5ffd5b60208401519092506120cc816119ab565b80915050925092905056fea26469706673582212207639c9e32b25c88702b0670e47a86af0df21cc85fb965529755b8ed2af19b1ce64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_gatewayRouter";
            readonly type: "address";
            readonly internalType: "contract IGatewayRouter";
        }, {
            readonly name: "_inbox";
            readonly type: "address";
            readonly internalType: "contract IGatewayRouter";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaArbitrumBridge";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_arbitrumData";
            readonly type: "tuple";
            readonly internalType: "struct ArbitrumBridgeFacet.ArbitrumData";
            readonly components: readonly [{
                readonly name: "maxSubmissionCost";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGasPrice";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaArbitrumBridge";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_arbitrumData";
            readonly type: "tuple";
            readonly internalType: "struct ArbitrumBridgeFacet.ArbitrumData";
            readonly components: readonly [{
                readonly name: "maxSubmissionCost";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGasPrice";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): ArbitrumBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ArbitrumBridgeFacet;
}
export {};
